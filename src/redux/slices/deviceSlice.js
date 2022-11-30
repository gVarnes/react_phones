import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  types: [],
  brands: [],
  devices: [],
  selectedType: {},
  page: 1,
  totalCount: 0,
  limit: 6,
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const {
  setSelectedType,
  setTypes,
  setBrands,
  setDevices,
  setPage,
  setTotalCount,
  setLimit,
} = deviceSlice.actions;
export default deviceSlice.reducer;
