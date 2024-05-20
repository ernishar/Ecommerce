

const express = require('express');
const categoriesRouter = express.Router();
const categoriesController = require('../../controllers/categories');

// Define routes
categoriesRouter.get('/', categoriesController.getAllCategories);
categoriesRouter.post('/', categoriesController.createCategory);
categoriesRouter.get('/:id', categoriesController.getCategoryById);
categoriesRouter.put('/:id', categoriesController.updateCategory);
categoriesRouter.delete('/:id', categoriesController.deleteCategory);

module.exports = categoriesRouter;
