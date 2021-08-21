import Mongoose from "mongoose";
import WishList from "../models/wishList.js";

export const getCartSavedProducts = async (req, res) => {
  try {
    const wishListItems = await WishList.find({});
    res.json(wishListItems);
  } catch (error) {
    console.log(error.message);
  }
};

export const addToWishList = async (req, res) => {
  const { productName, productDescription, productQuantity } = req.body;

  const newItem = new WishList({
    productName,
    productDescription,
    productQuantity,
  });

  try {
    newItem.save();
    res.status(200).json(newItem);
  } catch (error) {
    res.status(409).json({ err: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const id = req.params.id;

  try {
    await WishList.findByIdAndDelete(id).exec();
    res.send("Deleted SuccessFully!");
  } catch (error) {
    res.status(409).json({ err: error.message });
  }
};

export const updateItem = async (req, res) => {
  const id = req.params.id;
  const { productName, productDescription, productQuantity } = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No product with this ${id}` });

  const updatedItem = {
    productName,
    productDescription,
    productQuantity,
    _id: id,
  };

  await WishList.findByIdAndUpdate(id, updatedItem);
  res.json(updatedItem);
};
