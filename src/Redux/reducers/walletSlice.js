import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      name: "Tether",
      value: "1000",
      price: 1.0,
      total: 1000,
    },
  ],
};

export const wallet = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const isExist = state.value.some(
        (item) => item.name === action.payload.name
      );
      state.value.map((item) => console.log(item.value, action.payload.value));
      isExist
        ? (state.value = state.value.map((item) =>
            item.name === action.payload.name
              ? {
                  ...item,
                  value: Number(item.value) + Number(action.payload.value),
                  total: Number(item.total) + Number(action.payload.total),
                }
              : item
          ))
        : state.value.push(action.payload);
    },
  },
});

export const { addItem } = wallet.actions;

export default wallet.reducer;
