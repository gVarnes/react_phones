import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { findBasketItem } from '../../utils/findBasketItem';
import { removeBasketItem } from '../../utils/removeBasketItem';

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
      removeBasketItem(state, action);
      calcTotalPrice(state);
    },
    reduceCount: (state, action) => {
      const findItem = findBasketItem(state, action);

      if (findItem.count > 1) {
        findItem.count--;
      } else {
        removeBasketItem(state, action);
      }
      calcTotalPrice(state);
    },
    increaseCount: (state, action) => {
      const findItem = findBasketItem(state, action);
      findItem.count++;
      calcTotalPrice(state);
    },
  },
});

export const {
  setBasketItem,
  setIsBasketOpen,
  removeItem,
  reduceCount,
  increaseCount,
} = basketSlice.actions;

export default basketSlice.reducer;
