const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").post(createProduct).put(updateProduct);
router.route("/:id").get(getProduct).delete(deleteProduct);

module.exports = router;
