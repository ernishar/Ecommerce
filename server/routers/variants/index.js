// routes/variantRoutes.js

const express = require("express");
const variantRouter = express.Router();
const variantController = require("../../controllers/variants");

// CRUD routes
variantRouter.post("/", variantController.create);
variantRouter.get("/:id", variantController.findById);
variantRouter.put("/:id", variantController.update);
variantRouter.delete("/:id", variantController.delete);

module.exports = variantRouter;
