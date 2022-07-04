import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
  },
});
