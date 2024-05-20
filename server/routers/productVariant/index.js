
const express = require("express");
const productVariantRouter = express.Router();
const productVariantController = require("../../controllers/ProductVariant");

// CRUD routes
productVariantRouter.post("/", productVariantController.create);
productVariantRouter.get("/:id", productVariantController.findById);
productVariantRouter.put("/:id", productVariantController.update);
productVariantRouter.delete("/:id", productVariantController.delete);

module.exports = productVariantRouter;
