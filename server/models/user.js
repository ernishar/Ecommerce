const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    static associate({ Cart, Orders }) {
      User.hasOne(Cart, {
        foreignKey: "userId",
      });

      User.hasOne(Orders, {
        foreignKey: "userId",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 255], // Adjusted length validation to match MySQL definition
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 255], // Adjusted length validation to match MySQL definition
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true, // Changed to disallow null values to match MySQL definition
        validate: {
          is: /^[0-9]+$/,
        },
      },
      admin: {
        type: DataTypes.STRING,
        defaultValue: "0", // Changed to string to match MySQL definition
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users", // Added tableName to match MySQL table name
    }
  );
  // User.sync({alter:true})

  return User;
};
