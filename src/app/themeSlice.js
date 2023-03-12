import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTheme: 'dark'
}

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.activeTheme = action.payload;
    }
  }
});

const { actions, reducer } = themeSlice;
export const { changeTheme } = actions;
export default reducer;
