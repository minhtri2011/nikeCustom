import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface state {
  darkMode: boolean;
}
const initialState: state = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    },
    setTheme(state,action:PayloadAction<boolean>){
      state.darkMode = action.payload
    }
  },
});

//actions
export const ThemeActions = themeSlice.actions;

//selector
export const selectDarkModeThemeReducer = (state: any) => state.ThemeReducer.darkMode;
//reducer
const ThemeReducer = themeSlice.reducer;
export default ThemeReducer;
