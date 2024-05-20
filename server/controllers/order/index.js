const { Orders, User } = require("../../models");

const getOrders = async (userId) => {
  try {
    const OrdersUser = await Orders.findAll({
      where: {
        userId,
      },
    });
    return OrdersUser;
  } catch (err) {
    console.log(err);
  }
};

const createOrders = async (data) => {
  try {
    const newOrders = await Orders.create(data);
    console.log(data)
    return newOrders;
  } catch (err) {
    console.log(err);
  }
};



const updateOrders = async (id, data) => {
  try {
    const updatedOrders = await Orders.update(data, {
      where: {
        id,
      },
    });
    return updatedOrders;
  } catch (err) {
    console.log(err);
  }
};


const getListOrders = async () => {
  try {
    const listOrders = await Orders.findAll();
    return listOrders;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getOrders,
  createOrders,
  updateOrders,
  getListOrders,
};
