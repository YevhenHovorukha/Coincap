import { configureStore } from "@reduxjs/toolkit";
import coinDataSlice from "./reducers/coinDataSlice";

export const store = configureStore({
  reducer: {
    coinData: coinDataSlice,
  },
});
