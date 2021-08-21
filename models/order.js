import Mongoose from "mongoose";

const OrderSchema = new Mongoose.Schema({
  productName: {
    type: String,
  },
  productQuantity: {
    type: Number,
  },
});

const Order = Mongoose.model("order", OrderSchema);
export default Order;
