// const { getCartByUser } = require("../../controllers/carts");
const { getOrders } = require("../../controllers/order");
const express = require("express");
const { authenticate } = require("../../middleware/auth");
const { sendMail } = require("../../mailer.js");
const nodeMailer = require("nodemailer");

const emailRouter = express.Router();

emailRouter.post("/", [authenticate], async (req, res) => {
  const { fullName, email, phone, address } = req.body;

  const user = req.user;

  const subject = "Order Details";
  const status = false;

  const orderUser = await getOrders(user.id);
  console.log(orderUser)

  const htmlHead = `<table style="width:50%">
    <tr style="border: 1px solid black;"><th style="border: 1px solid black;">Product Name</th><th style="border: 1px solid black;">Quantity</th><th style="border: 1px solid black;">Total Prices</th>`;

  let htmlContent = "";

  for (let i = 0; i < orderUser.length; i++) {
    htmlContent += `<tr>
      <td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">${
        orderUser[i].productName
      }</td>
      <td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">${
        orderUser[i].quantity
      }</td>
      <td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">${
        orderUser[i].totalPrices
      }$</td>
      <tr>`;
  }
  const htmlResult = `
  <h1>Hi, ${fullName}</h1>
  <h2>Thank you for your order! You made a great choice! </h2>
  <h3>Phone: ${phone}</h3>
  <h3>Address: ${address}</h3>
    ${htmlHead}
    ${htmlContent}
  <p>Thank You!</p>
    `;

  const info = await sendMail(email, subject, htmlResult);

  res.status(200).send({ sendEmail: nodeMailer.getTestMessageUrl(info) });
});

emailRouter.post("/status", [authenticate], async (req, res) => {
  const { fullName, email, phone, address } = req.body;

  const user = req.user;

  const subject = "Order Status Changed";
  const status = false;

  const orderUser = await getOrders(user.id);

 

  const htmlHead = `<table style="width:50%">
    <tr style="border: 1px solid black;">
    <th style="border: 1px solid black;">Product Name</th>
    <th style="border: 1px solid black;"> Shipping Status</th>
    <th style="border: 1px solid black;">Delivery Status</th>
    
    </tr>`;

  let htmlContent = "";

  for (let i = 0; i < orderUser.length; i++) {
    htmlContent += `<tr>
      <td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">${
        orderUser[i].productName
      }</td>
      <td style="border: 1px solid black; font-size: 1.2rem; text-align: center;"><img src=${
        orderUser[i].status
      }width="80" height="80"></td>
      <td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">${
        orderUser[i].delivery
      }$</td>`;
  }
  const htmlResult = `
  <h1>Hi, ${fullName}</h1>
  <h2>Your order Status has been updated! </h2>
  <h3>Phone: ${phone}</h3>
  <h3>Address: ${address}</h3>
    ${htmlHead}
    ${htmlContent}
  <p>Thank You!</p>
    `;

  const info = await sendMail(email, subject, htmlResult);

  res.status(200).send({ sendEmail: nodeMailer.getTestMessageUrl(info) });
});

module.exports = emailRouter;
