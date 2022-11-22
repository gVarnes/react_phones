import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  types: [],
  brands: [],
  devices: [],
  selectedType: {},
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
  },
});

export const { setSelectedType, setTypes, setBrands } = deviceSlice.actions;
export default deviceSlice.reducer;
