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
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {},
});

export const {} = deviceSlice.actions;
export default deviceSlice.reducer;
