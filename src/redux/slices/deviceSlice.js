import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  types: [
    {
      id: 1,
      name: 'Laptops',
    },
    {
      id: 2,
      name: 'Phones',
    },
  ],
  brands: [
    {
      id: 1,
      name: 'Samsung',
    },
    {
      id: 2,
      name: 'Apple',
    },
  ],
  devices: [],
  selectedType: {},
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

export const { setSelectedType } = deviceSlice.actions;
export default deviceSlice.reducer;
