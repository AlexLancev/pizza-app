import { configureStore } from "@reduxjs/toolkit";
import currentProductListSlice from "./currentProductList/reducer";
import presentationSlice from "./product/reducer";
import searchCounterSlice from "./search/reducer";
import cartSlice from "./cart/reducer";
import submitSlice from "./onSubmit/reducer";

export const store = configureStore({
  reducer: {
    currentProduct: currentProductListSlice,
    presentation: presentationSlice,
    search: searchCounterSlice,
    cart: cartSlice,
    submit: submitSlice
  },
});
