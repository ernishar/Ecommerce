// Variants.js
"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Variants extends Model {
    static associate({ ProductVariants, Cart, Products }) {
      Variants.belongsTo(ProductVariants, {
        foreignKey: "variantId",
      });
      Variants.hasMany(Cart, {
        foreignKey: "variantId",
      });
      Variants.belongsTo(Products, {
        foreignKey: "productId",
      });
    }
  }
  Variants.init(
    {
      variantAttributes: {
        type: DataTypes.STRING,
        allowNull: false,
      },    
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      variantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "ProductVariants", 
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products", 
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Variants",
      timestamps: false,
    }
  );
    // Variants.sync({force:true})
  return Variants;
};
