

const { Categories } = require('../../models'); // Assuming your model is named Categories

const categoriesController = {
  async getAllCategories(req, res) {
    try {
      const categories = await Categories.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createCategory(req, res) {
    try {
      const category = await Categories.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getCategoryById(req, res) {
    try {
      const category = await Categories.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateCategory(req, res) {
    try {
      const category = await Categories.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      await category.update(req.body);
      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteCategory(req, res) {
    try {
      const category = await Categories.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      await category.destroy();
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = categoriesController;
