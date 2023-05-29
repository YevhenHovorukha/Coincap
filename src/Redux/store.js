import { configureStore } from "@reduxjs/toolkit";
import coinDataSlice from "./reducers/coinDataSlice";
import walletSlice from "./reducers/walletSlice";

export const store = configureStore({
  reducer: {
    coinData: coinDataSlice,
    wallet: walletSlice,
  },
});
