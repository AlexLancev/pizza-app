import { createSlice } from "@reduxjs/toolkit";

const presentationSlice = createSlice({
  name: "presentation",
  initialState: {
    presentationProduct: {},
  },
  reducers: {
    presentationShow: (state, action) => {
      state.presentationProduct = action.payload;
    },
  },
});

export const { presentationShow } = presentationSlice.actions;
export default presentationSlice.reducer;
