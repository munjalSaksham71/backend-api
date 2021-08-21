import Mongoose from "mongoose";
import Order from "../models/order.js";

export const getOrder = async (req, res) => {
  try {
    const OrderItems = await Order.find({});
    res.json(OrderItems);
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    const OrderItem = await Order.findById(id);
    res.json(OrderItem);
  } catch (error) {
    console.log(error.message);
  }
};

export const postOrder = async (req, res) => {
  const { productName, productQuantity } = req.body;

  const newOrder = new Order({
    productName,
    productQuantity,
  });

  try {
    newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(409).json({ err: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  const id = req.params.id;

  try {
    await Order.findByIdAndDelete(id).exec();
    res.send("Order Cancelled!!");
  } catch (error) {
    res.status(409).json({ err: error.message });
  }
};

export const updateOrder = async (req, res) => {
  const id = req.params.id;
  const { productName, productQuantity } = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No product with this ${id}` });

  const updatedOrder = {
    productName,
    productQuantity,
    _id: id,
  };

  await Order.findByIdAndUpdate(id, updatedOrder);
  res.json(updatedOrder);
};
