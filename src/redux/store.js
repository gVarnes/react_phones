import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import filterSlice from './slices/filterSlice';
import filterMenuSlice from './slices/filterMenuSlice';
import themeModeSlice from './slices/themeModeSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    filtersMenu: filterMenuSlice,
    themeMode: themeModeSlice,
  },
});
