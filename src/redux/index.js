import { configureStore } from "@reduxjs/toolkit";
import presentationSlice from "./product/reducer";
import searchCounterSlice from "./search/reducer";
import cartSlice from './cart/reducer';

export const store = configureStore({
  reducer: {
    presentation: presentationSlice,
    search: searchCounterSlice,
    cart: cartSlice
  },
});
