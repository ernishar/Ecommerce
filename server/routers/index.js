const express = require("express");
const userRouter = require("./users");
const productRouter = require("./products");
const cartRouter = require("./carts");
const emailRouter = require("./emails");
const orderRouter = require("./order");
const categoriesRouter = require("./cateogries")
const productVariantRouter = require("./productVariant")
const variantRouter = require("./variants")

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/carts", cartRouter);
rootRouter.use("/emails", emailRouter);
rootRouter.use("/order", orderRouter);
rootRouter.use("/categories",categoriesRouter)
rootRouter.use("/productVariant",productVariantRouter);
rootRouter.use("/variant",variantRouter)

module.exports = rootRouter;
