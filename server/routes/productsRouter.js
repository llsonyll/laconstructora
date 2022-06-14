const express = require("express");
const router = express.Router();

const {
  getProductByName,
  getProductByBrand,
  getProductByTag,
} = require("../controllers/productsController");

router.get("/byName", getProductByName);
router.get("/byBrand", getProductByBrand);
router.get("/byTag", getProductByTag);

module.exports = router;
