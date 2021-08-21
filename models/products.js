import Mongoose from "mongoose";

const ProductSchema = new Mongoose.Schema({
  productName: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  productQuantity: {
    type: Number,
  },
});

const Product = Mongoose.model("product", ProductSchema);
export default Product;
