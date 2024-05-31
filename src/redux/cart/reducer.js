import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    cartProduct: [],
  },
  reducers: {
    cartShow: (state, action) => {
      state.cartProduct = action.payload;
      state.totalPrice = state.cartProduct.reduce((acc, el) => acc + Number(el.price), 0);
    },
  },
});

export const { cartShow, totalSum } = cartSlice.actions;
export default cartSlice.reducer;
