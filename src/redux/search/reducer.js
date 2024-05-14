import { createSlice } from "@reduxjs/toolkit";

const searchCounterSlice = createSlice({
  name: "search",
  initialState: {
    searchProduct: '',
  },
  reducers: {
    searchCounter: (state, action) => {
      state.searchProduct = action.payload;
    },
  },
});

export const { searchCounter } = searchCounterSlice.actions;
export default searchCounterSlice.reducer;