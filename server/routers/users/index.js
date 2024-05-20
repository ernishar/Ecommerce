const express = require("express");
const passport = require('passport');
const { googleAuth, googleAuthCallbackHandler } = require('../../controllers/auth/auth');

const { createUser, getUserByEmail, getListUser, getUserById, deleteUser, updateUser } = require("../../controllers/users");
const {hashPassword,
comparePassword,
genToken,
verifyToken,
genrefreshToken,}  = require('../../controllers/auth')
const { authenticate, verifyTokenandAdmin } = require("../../middleware/auth");
const userRouter = express.Router();


userRouter.get('/auth/google', googleAuth);
userRouter.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  console.log(req.user);
  res.cookie("token", req.user)
  res.redirect(`http://localhost:3000`);
});

let refreshTokens = [];
userRouter.post("/register", async (req, res) => {
  const { fullname, email, password, phone } = req.body;

  const hashedPassword = await hashPassword(password);

  const user = await createUser({
    fullname,
    email,
    password: hashedPassword,
    phone,
  });

  if (!user) {
    return res.status(500).send("Can't create user");
  }
  res.status(200).send(user);
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).send("Wrong email!!!");
  }

  const isValidPassword = await comparePassword(password, user.password);

  if (!isValidPassword) {
    return res.status(404).send("Wrong Password!!!");
  }

  if (user && isValidPassword) {
    const token = await genToken({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
    });

    const refresh = await genrefreshToken({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
    });

    res.cookie("refreshToken", refresh, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    refreshTokens.push(refresh);
    const { password, ...others } = user.dataValues;
    res.status(200).send({ ...others, token });
  }
});

userRouter.get("/", [authenticate], async (req, res) => {
  const listUser = await getListUser();

  if (!listUser) {
    return res.status(500).send("Can't get list user");
  }

  res.status(200).send(listUser);
});

userRouter.delete(
  "/:id",
  [authenticate, verifyTokenandAdmin],
  async (req, res) => {
    const { id } = req.params;

    const idUserExist = await getUserById(id);

    if (!idUserExist) {
      return res.status(500).send(`User ${id} is not exists in db`);
    }

    const userDeleted = await deleteUser(id);

    res.status(200).send(`User id : ${userDeleted} successfully`);
  }
);

userRouter.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).send("You're not authenticate");
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).send("Refresh token is not valid");
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, async (err, user) => {
    if (err) {
      console.log(err);
    }

    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newAccessToken = await genToken({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
    });
    const newRefreshToken = await genrefreshToken({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
    });

    refreshTokens.push(newRefreshToken);
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    res.status(200).send({ accessToken: newAccessToken });
  });
});

userRouter.post("/logout", [authenticate], (req, res) => {
  res.clearCookie("refreshToken");
  refreshTokens = refreshTokens.filter(
    (token) => token !== req.cookies.refreshToken
  );
  res.status(200).send("Log out is successfully");
});

userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { fullname, email, phone, password } = req.body;

  const isExistUser = await getUserById(id);

  if (!isExistUser) {
    res.status(500).send("User is not exists in db");
  }

  const hashedPassword = await hashPassword(password);

  const data = { fullname, email, phone, password: hashedPassword };
  await updateUser(id, data);

  res.status(200).send(data);
});


module.exports = userRouter;
