const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  status: { type: String, default: "available" }, // доступна или забронирована
});

module.exports = mongoose.model("Book", bookSchema);
