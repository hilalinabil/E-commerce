const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a product name"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
      min: 0,
    },
    stock: {
      type: Number,
      required: [true, "Please add stock quantity"],
      default: 0,
    },
    category: {
      type: String,
      required: false,
    },
    image: {
      type: String, // URL to image (local or cloud)
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
