import { configureStore } from '@reduxjs/toolkit';

import basketSlice from './slices/basketSlice';
import filterSlice from './slices/filterSlice';
import filterMenuSlice from './slices/filterMenuSlice';
import themeModeSlice from './slices/themeModeSlice';

import userSlice from './slices/userSlice';
import deviceSlice from './slices/deviceSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    filtersMenu: filterMenuSlice,
    themeMode: themeModeSlice,
    user: userSlice,
    device: deviceSlice,
  },
});
