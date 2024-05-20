const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require("./models"); // Assuming you're exporting the User model correctly from "./models/user"
const { hashPassword,
  comparePassword,
  genToken,
  verifyToken,
  genrefreshToken, } = require('./controllers/auth')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/api/v1/users/auth/google/callback',
      passReqToCallback: true,
      session:false
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ where: { email: profile.emails[0].value } });
        if (!user) {
          user = await User.create({
            id: profile.id,
            fullname: profile.displayName,
            email: profile.emails[0].value,
          });
          user = user.dataValues
          const token = await genToken({
            id: user.id,
            fullname: user.fullname,
            email: user.email,
          
          });

          done(null, token)
        } else {
          const token = await genToken({
            id: profile.id,
            fullname: profile.displayName,
            email: profile.emails[0].value,
          });
          return done(null, token);
        }
      
        } catch (err) {
          return done(err, null);
        }
      }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
 done(null, user)
});

module.exports = passport;
