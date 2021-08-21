import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.js";

const router = express.Router();

router.route("/").get(getProducts).post(addProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
