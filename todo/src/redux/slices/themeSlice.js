import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: state => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
