import { createSlice } from "@reduxjs/toolkit";

const currentProductListSlice = createSlice({
  name: "productList",
  initialState: {
    currentProductList: [],
  },
  reducers: {
    currentProduct: (state, action) => {
      state.currentProductList = action.payload;
    },
  },
});

export const { currentProduct } = currentProductListSlice.actions;
export default currentProductListSlice.reducer;
