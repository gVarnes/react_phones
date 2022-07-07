import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFilterMenuOpen: false,
};

export const filterMenuSlice = createSlice({
  name: 'navFilter',
  initialState,
  reducers: {
    setIsFilterMenuOpen: (state, action) => {
      state.isFilterMenuOpen = action.payload;
    },
  },
});

export const { setIsFilterMenuOpen } = filterMenuSlice.actions;

export default filterMenuSlice.reducer;
