const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user_id: { 
        type: String,
        ref: 'User',
        unique: true,
        required: true 
    },
    products: [
      {
        item_id: {
          type: String,
          ref: 'Item'
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
            type: Number,
            default: 0
        }
      },
    ],
    total: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);