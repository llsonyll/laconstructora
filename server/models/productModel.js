const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add user's name"],
    },
    brand: String,
    tags: [String],
    description: String,
    sellPrice: Number,
    buyPrice: Number,
    quantity: Number,
    location: [Schema.Types.Mixed],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
