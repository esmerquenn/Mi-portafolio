import { configureStore } from "@reduxjs/toolkit";
import SkillsReducer from "./slice/skillsSlice";
import cursorReducer from "./slice/cursorSlice";

const store = configureStore({
  reducer: {
    skills: SkillsReducer,
    cursor: cursorReducer,
  },
});

export default store;
