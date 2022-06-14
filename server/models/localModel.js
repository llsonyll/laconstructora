const mongoose = require("mongoose");

const localSchema = mongoose.Schema({
  name: String,
  description: String,
  capacity: String,
  stands: [Schema.Types.Mixed],
});

module.exports = mongoose.model("Local", localSchema);
