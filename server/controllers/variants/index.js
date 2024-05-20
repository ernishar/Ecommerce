// controllers/variantController.js

const { Variants } = require("../../models"); // Assuming your model is imported correctly

module.exports = {
  // Create a new variant
  async create(req, res) {
    try {
      console.log("req.body",req.body);
      const variant = await Variants.create(req.body);
      res.status(201).json(variant);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Find a variant by ID
  async findById(req, res) {
    try {
      const variant = await Variants.findByPk(req.params.id);
      if (!variant) {
        return res.status(404).json({ error: "Variant not found" });
      }
      res.json(variant);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update a variant
  async update(req, res) {
    try {
      const [updated] = await Variants.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedVariant = await Variants.findByPk(req.params.id);
        return res.json(updatedVariant);
      }
      throw new Error("Variant not found");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a variant
  async delete(req, res) {
    try {
      const deleted = await Variants.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        throw new Error("Variant not found");
      }
      res.json({ message: "Variant deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
