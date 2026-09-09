// 



const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },

    productQuantity: {
      type: Number,
      default: 1,
      required: true,
      min: [1, "Quantity must be at least 1"],
    },

    productPrice: {
      type: Number,
      required: true,
      min: [0, "Price must be positive"],
    },

    productThumbnail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;