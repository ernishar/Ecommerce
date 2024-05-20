"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
{
      class Cart extends Model {
        static associate({ User, Products, }) {
          Cart.belongsTo(User, { foreignKey: "userId" });
          Cart.belongsTo(Products, { foreignKey: "productId" });
         
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
      productName: DataTypes.STRING,
      count: DataTypes.INTEGER,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  // Cart.sync({ alter: true });
  return Cart;
}
};
