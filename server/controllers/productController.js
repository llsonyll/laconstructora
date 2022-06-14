const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

// @desc    Create product
// @route   POST /product
// @access  Private
const createProduct = asyncHandler(async (req, res) => {
  const { product } = req.body;

  if (!product) {
    res.status(400);
    throw new Error("Not product info found on req body");
  }

  const newProduct = await Product.create(product);
  res.status(200).json(newProduct);
});

// @desc    Get product
// @route   Get /product/:id
// @access  Private
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400);
    throw new Error("Product id required");
  }
  const product = await Product.findById(id);

  if (!user) {
    res.status(400);
    throw new Error("Product not found");
  }

  res.status(200).json(user);
});

// @desc    Update product
// @route   PUT /product
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const { user: productInfo } = req.body;

  if (!productInfo) {
    res.status(400);
    throw new Error("Product info should be provided");
  }

  if (!productInfo.id) {
    res.status(400);
    throw new Error("Product's id should be provided");
  }

  const productoId = productInfo.id;
  const existUser = await Product.findById(productoId);

  if (!existUser) {
    res.status(400);
    throw new Error("Product's id not found on DB");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    productoId,
    productInfo,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
});

// @desc    Remove Product
// @route   DELETE /product/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400);
    throw new Error("Product's id should be provided");
  }

  const product = await Product.findById(id);

  if (!product) {
    res.status(400);
    throw new Error("Product id should belong to an existing product");
  }

  await product.remove();
  res.status(200).json({ id });
});

module.exports = {
  createProduct,
  getProduct, // read product
  updateProduct,
  deleteProduct,
};
