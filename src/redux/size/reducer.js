import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
  name: "size",
  initialState: {
    sizeCurrent: false,
    sizeId: null
  },
  reducers: {
    sizeView: (state, action) => {
      state.sizeCurrent = action.payload;
    },
    sizeId: (state, action) => {
      state.sizeId = action.payload;
    },
  },
});

export const { sizeView, sizeId } = sizeSlice.actions;
export default sizeSlice.reducer;
