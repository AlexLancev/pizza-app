import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
  name: "submit",
  initialState: {
    cartSubmit: false,
  },
  reducers: {
    submitShow: (state, action) => {
      state.cartSubmit = action.payload;
    },
  },
});

export const { submitShow } = submitSlice.actions;
export default submitSlice.reducer;
