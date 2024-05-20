// Cart.js
"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Cart extends Model {
    static associate({ User, Products, Variants }) {
      Cart.belongsTo(User, { foreignKey: "userId" });
      Cart.belongsTo(Products, { foreignKey: "productId" });
      Cart.belongsTo(Variants, { foreignKey: "variantId" });
    }
  }
  Cart.init(
    {
      userId: DataTypes.INTEGER,
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products", 
          key: "id",
        },
      },
      variantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Variants", 
          key: "id",
        },
      },
      quantity: {type: DataTypes.INTEGER,allowNull: false,},
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  // Cart.sync({force:true})
  return Cart;

};
