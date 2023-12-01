import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      var exists = false;

      state.products.map((item) => {
        if (item._id === action.payload._id) {
          console.log(item._id, action.payload._id)
          item.itemQuantity += 1;
          exists = true;
        }
      });

      console.log(exists);
      if (!exists) {
        state.products.push(action.payload);
      }
      state.quantity += 1;
      state.total += action.payload.price;
    },
    decrementProduct: (state, action) => {
      var i;
      for (i = 0; i < state.products.length; i++) {
        if (state.products[i]._id === action.payload._id) {
          if (state.products[i].itemQuantity === 1) {
            state.total -= state.products[i].price;
            state.products.splice(i, 1);
          } else {
            state.products[i].itemQuantity--;
            state.total -= state.products[i].price;
            
          }
          state.quantity -= 1
          break;
        }
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeProduct: (state, action) => {
      var i;
      for (i = 0; i < state.products.length; i++) {
        if (state.products[i]._id === action.payload._id) {
          state.quantity -= state.products[i].itemQuantity;
          state.total -= state.products[i].itemQuantity * state.products[i].price;;
          state.products.splice(i, 1);
          break;
        }
      }
    }
  },
});

export const { addProduct, removeProduct, decrementProduct } = cartSlice.actions;
export default cartSlice.reducer;