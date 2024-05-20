"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class ProductVariants extends Model {
    static associate({ Products, Variants}) {
      // Define association here
      ProductVariants.belongsTo(Products, {
        foreignKey: "productId",
        // as: "productVariants",
        onDelete: "CASCADE", // onDelete cascade
        onUpdate: "CASCADE", // onUpdate cascade
      });

      ProductVariants.hasMany(Variants,{
        foreignKey:"VariantID",
        // as:"variants"
      })
    }
  }
  ProductVariants.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      variantName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products", // Corrected table name
          key: "id",
        },
      }
    },
    {
      sequelize,
      modelName: "ProductVariants",
      timestamps: false, 
    }
  );
  // ProductVariants.sync({alter:true})
  return ProductVariants;
};
