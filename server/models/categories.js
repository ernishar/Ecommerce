"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      // define association here
      Categories.hasMany(models.Products, {
        foreignKey: "categoryID",
        // as: "categories",
      });
    }
  }
  
  Categories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      
      categoryName: DataTypes.STRING,
      isdeleted: DataTypes.BOOLEAN,
      // You can add more fields specific to your category here
    },
    {

      sequelize,
      modelName: "Categories",
    }
  );
//  Categories.sync({ force: true });
  return Categories;
};
