import express from "express";
import {
  getCartSavedProducts,
  addToWishList,
  deleteItem,
  updateItem,
} from "../controllers/wishList.js";

import {
  getOrder,
  getOrderById,
  postOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/orders.js";

const router = express.Router();

// Add To WishList Routes
router.route("/wishList").get(getCartSavedProducts).post(addToWishList);
router.route("/wishList/:id").delete(deleteItem).put(updateItem);

//Orders Routes
router.route("/order").get(getOrder).post(postOrder);
router
  .route("/order/:id")
  .get(getOrderById)
  .delete(deleteOrder)
  .put(updateOrder);

export default router;
