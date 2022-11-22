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
    setDevices: (state, action) => {
      state.devices = action.payload;
    },
  },
});

export const { setSelectedType, setTypes, setBrands, setDevices } =
  deviceSlice.actions;
export default deviceSlice.reducer;
