import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState = {
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  isBasketOpen: false,
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setIsBasketOpen: (state, action) => {
      state.isBasketOpen = action.payload;
    },
    setBasketItem: (state, action) => {
      const findItem = state.basket.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.basket.push({
          ...action.payload,
          count: 1,
        });
      }

      calcTotalPrice(state);
    },
    removeItem: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);

      calcTotalPrice(state);
    },
  },
});

export const { setBasketItem, setIsBasketOpen, removeItem } =
  basketSlice.actions;

export default basketSlice.reducer;
