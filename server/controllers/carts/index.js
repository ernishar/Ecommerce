const { Cart, User } = require("../../models");

const getCartByUser = async (userId) => {
  try {
    const cartUser = await Cart.findAll({
      where: {
        userId,
      },
    });
    return cartUser;
  } catch (err) {
    console.log(err);
  }
};

const addToCart = async (product) => {
  try {
    const carts = await Cart.create(product);
    return carts;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCartByUser,
  addToCart,
};