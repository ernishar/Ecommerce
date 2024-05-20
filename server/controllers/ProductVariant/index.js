
const { ProductVariants } = require("../../models"); // Assuming your model is imported correctly
// const productVariants = require("../../models/productVariants");

module.exports = {
  // Create a new product variant
  async create(req, res) {
    try {
      console.log("req.body",req.body);
      const productVariant = await ProductVariants.create(req.body);
      res.status(201).json(productVariant);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Find a product variant by ID
  async findById(req, res) {
    try {
      const productVariant = await ProductVariants.findByPk(req.params.id);
      if (!productVariant) {
        return res.status(404).json({ error: "Product variant not found" });
      }
      res.json(productVariant);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update a product variant
  async update(req, res) {
    try {
      const [updated] = await ProductVariants.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedProductVariant = await ProductVariants.findByPk(
          req.params.id
        );
        return res.json(updatedProductVariant);
      }
      throw new Error("Product variant not found");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a product variant
  async delete(req, res) {
    try {
      const deleted = await ProductVariants.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        throw new Error("Product variant not found");
      }
      res.json({ message: "Product variant deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
