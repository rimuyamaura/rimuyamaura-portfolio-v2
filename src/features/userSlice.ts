import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isDarkMode: boolean;
}

const initialState: UserState = {
  isDarkMode: localStorage.getItem('isDarkMode') === 'true',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', state.isDarkMode.toString());
    },
  },
});

export const { toggleTheme } = userSlice.actions;
export default userSlice.reducer;
