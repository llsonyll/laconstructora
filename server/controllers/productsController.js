const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Create product
// @route   POST /product
// @access  Private
const getProductByName = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Product name should be provided");
  }

  const regex = new RegExp(name, "i");
  const products = await Product.find({ name: regex });
  return res.status(200).json(products);
});

const getProductByBrand = asyncHandler(async (req, res) => {
  const { brand } = req.body;
  if (!brand) {
    res.status(400);
    throw new Error("Some brand should be provided");
  }

  const regex = new RegExp(brand, "gi");
  const products = await Product.find({ brand: regex });
  return res.status(200).json(products);
});

const getProductByTag = asyncHandler(async (req, res) => {
  const { tags } = req.body;
  if (!tags) {
    res.status(400);
    throw new Error("Tags should be provided");
  }

  const products = await Product.find();
  return res.status(200).json(products);
});

module.exports = {
  getProductByName,
  getProductByBrand,
  getProductByTag,
};
