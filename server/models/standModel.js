const mongoose = require("mongoose");

const standSchema = mongoose.Schema({
  name: String,
  description: String,
  location: Number,
  products: [Schema.Types.Mixed],
  type: String,
  capacity: String,
});

module.exports = mongoose.model("Stand", standSchema);
