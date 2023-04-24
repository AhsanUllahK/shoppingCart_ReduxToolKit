import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCard } = cartSlice.actions;
export default cartSlice.reducer;
