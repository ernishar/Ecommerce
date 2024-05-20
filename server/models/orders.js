"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {

    static associate({ User }) {
      // define association here
      Orders.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Orders.init(
    {
      userId: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      productName:DataTypes.STRING,
      totalPrices:DataTypes.STRING,
      status: {
        type: DataTypes.TINYINT,
        defaultValue: false,
      },
      delivery: {
        type: DataTypes.TINYINT,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  // Orders.sync({ alter: true });
  return Orders;
};
