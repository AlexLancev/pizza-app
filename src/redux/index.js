import { configureStore } from "@reduxjs/toolkit";
import presentationSlice from "./product/reducer";
import searchCounterSlice from "./search/reducer";
import cartSlice from './cart/reducer'
import sizeSlice from "./size/reducer";

export const store = configureStore({
  reducer: {
    presentation: presentationSlice,
    size: sizeSlice,
    search: searchCounterSlice,
    cart: cartSlice
  },
});
