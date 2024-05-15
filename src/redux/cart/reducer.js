import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
  },
  reducers: {
    cartShow: (state, action) => {
      state.cartProduct = action.payload;
    },
  },
});

export const { cartShow } = cartSlice.actions;
export default cartSlice.reducer;
