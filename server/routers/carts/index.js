// const express = require('express');
// // const cartRouter = express.Router();
// const cartController = require("../../controllers/addToCart")

// // cartRouter.post('/', cartController.addToCart);
// // cartRouter.get('/:userId', cartController.getCartByUser);


const { addToCart } = require("../../controllers/carts");

const express = require("express");
const { getAllProductById } = require("../../controllers/products");
const { authenticate } = require("../../middleware/auth");

const cartRouter = express.Router();

// cartRouter.post("/", [authenticate], async (req, res) => {
//     const { userId, productId, productCount } = req.query;

// // console.log("req.query",req.query);
//     const product = await getAllProductById(productId,);
//     // console.log("Data coming from Cart Router", product);

//     // if (!user || !user.id) {
//     //     return res.status(400).json({ error: 'User ID is missing or invalid' });
//     // }

//     try {
//         const cart = await addToCart({
//             userId: userId,
//             productId: productId,
//             productName: product.name,
//             productPrices: product.price,
//             count: productCount,
//             img: product.img1,
//         });

//         if (!cart) {
//             return res.status(500).json({ error: "Can't create cart" });
//         }

//         res.status(200).send(cart);
//     } catch (error) {
//         console.log("Error adding item to cart:", error.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

cartRouter.post("/", [authenticate], async (req, res) => {
    const { productId, productCount, userId } = req.query; // Extract productId, productCount, and userId from req.query
  
    const product = await getAllProductById(productId);
  
    try {
      const cart = await addToCart({
        userId: userId, 
        productId: productId,
        productName: product.name,
        count: productCount,
        img: product.img1,
      });
  
      if (!cart) {
        return res.status(500).json({ error: "Can't create cart" });
      }
  
      res.status(200).send(cart);
    } catch (error) {
      console.log("Error adding item to cart:", error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = cartRouter;