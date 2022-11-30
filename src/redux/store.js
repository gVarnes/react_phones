import { configureStore } from '@reduxjs/toolkit';

import basketSlice from './slices/basketSlice';
import themeModeSlice from './slices/themeModeSlice';

import userSlice from './slices/userSlice';
import deviceSlice from './slices/deviceSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    themeMode: themeModeSlice,
    user: userSlice,
    device: deviceSlice,
  },
});
