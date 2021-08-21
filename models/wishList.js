import Mongoose from "mongoose";

const WishListSchema = new Mongoose.Schema({
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

const WishList = Mongoose.model("wishList", WishListSchema);
export default WishList;
