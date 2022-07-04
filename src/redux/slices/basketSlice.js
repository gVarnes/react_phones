import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  isBasketOpen: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasketElem: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    setIsBasketOpen: (state, action) => {
      state.isBasketOpen = action.payload;
    },
    removeElem: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setBasketElem, setIsBasketOpen, removeElem } =
  basketSlice.actions;

export default basketSlice.reducer;
