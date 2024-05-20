// Products.js
"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Products extends Model {
    static associate({ Cart, ProductVariants, Categories }) {
      Products.hasMany(Cart, {
        foreignKey: "productId",
      });
      Products.hasMany(ProductVariants, {
        foreignKey: "productId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Products.belongsTo(Categories, {
        foreignKey: "categoryID",
      });
    }
  }
  Products.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      img1: DataTypes.TEXT,
      img2: DataTypes.TEXT,
      img3: DataTypes.TEXT,
      img4: DataTypes.TEXT,
      categoryID: DataTypes.INTEGER,
      category: DataTypes.STRING,
      stocks: DataTypes.STRING,
      promotionPercent: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  // Products.sync({force:true})
  return Products;
};
