const express = require("express");
const {
  getOrders,
  createOrders,
  updateOrders,
  getListOrders,
} = require("../../controllers/order");
const { getCartByUser } = require("../../controllers/carts");
const orderRouter = express.Router();





orderRouter.get("/", async (req, res) => {
  const { userId } = req.query;

  if (userId) {
    const user = await getOrders(userId);
    if (!user) {
      return res.status(500).send("Can't get user Orders");
    }
    res.status(200).send(user);
  } else {
    const listOrders = await getListOrders();
    if (!listOrders) {
      return res.status(500).send("Can't get list Orders");
    }

    res.status(200).send(listOrders);
  }
});



orderRouter.post("/", async (req, res) => {
  const { userId, phone, address, quantity, productName,totalPrices,
    fullname,  } = req.body;

  const Orders = await createOrders({
    userId,
    phone,
    address,
    quantity,
    productName,
    totalPrices,
    fullname,
  });
  // console.log(Orders)
  if (!Orders) {
    return res.status(500).send("Can't create Orders");
  }

  res.status(200).send(Orders);
});


orderRouter.patch("/", async (req,res)=>{
  const { status, delivery } = req.body;
  
  const statusUpdate = await updateOrders({
    status,
    delivery
  });
  // console.log(statusUpdate)
  if (!statusUpdate) {
    return res.status(500).send("Can't Updates Orders");
  } 
  res.status(200).send(statusUpdate);
})

orderRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const {
   status,
   delivery
  } = req.body;

  const isOrderExists = getOrders(id);

  if (!isOrderExists) {
    return res.status(500).send(`Order ${id} is not exists in db`);
  }

  const data = {
   status,
   delivery
  };

  await updateOrders(id, data);

  res.status(200).send(data);
});


orderRouter.get("/", async (req, res) => {
  const listOrders = await getListOrders();

  if (!listOrders) {
    return res.status(500).send("Can't get list Orders");
  }

  res.status(200).send(listOrders);
});
module.exports = orderRouter;
