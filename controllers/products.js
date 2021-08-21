import Mongoose from "mongoose";
import Product from "../models/products.js";

export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const productItem = await Product.findById(id);
    res.json(productItem);
  } catch (error) {
    console.log(error.message);
  }
};

export const addProduct = async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    productQuantity: req.body.productQuantity,
  });

  try {
    newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndRemove(id).exec();
    res.send("Successfully Deleted");
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { productName, productDescription, productQuantity } = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No product with this ${id}` });

  const updatedProduct = {
    productName,
    productDescription,
    productQuantity,
    _id: id,
  };

  await Product.findByIdAndUpdate(id, updatedProduct);
  res.json(updatedProduct);
};
