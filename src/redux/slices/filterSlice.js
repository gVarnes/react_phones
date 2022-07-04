import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterByCondition: '',
  sortByCondition: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterByCondition: (state, action) => {
      state.filterByCondition = action.payload;
    },
    setSortByCondition: (state, action) => {
      state.sortByCondition = action.payload;
    },
  },
});

export const { setFilterByCondition, setSortByCondition } = filterSlice.actions;

export default filterSlice.reducer;
