import { createSlice } from '@reduxjs/toolkit';

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
      state.totalPrice = state.basket.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
    },
    removeItem: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setBasketItem, setIsBasketOpen, removeItem } =
  basketSlice.actions;

export default basketSlice.reducer;
