import path from "path";
import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import buyerRoutes from "./routes/buyerRoutes.js";

import configDB from "./config/db.js";

dotenv.config();

configDB();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/seller", productRoutes);
app.use("/api/buyer", buyerRoutes);

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
  next();
});

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server Starts at port ${PORT}`);
});
