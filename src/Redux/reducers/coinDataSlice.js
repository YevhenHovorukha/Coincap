import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoinData = createAsyncThunk("coinData/getData", async () => {
  try {
    const getData = await axios.get("https://api.coincap.io/v2/assets", {
      params: {
        limit: 40,
      },
    });
    return getData.data.data;
  } catch (error) {
    console.log(error);
  }
});

const coinDataSlice = createSlice({
  name: "coinData",
  initialState: {
    data: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoinData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getCoinData.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getCoinData.pending, (state) => {
      state.loading = true;
    });
  },
});

export default coinDataSlice.reducer;
