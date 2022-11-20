import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setIsAuth, setUser } = userSlice.actions;
export default userSlice.reducer;