import { configureStore } from "@reduxjs/toolkit";
import SkillsReducer from "./slice/skillsSlice";
const store = configureStore({
  reducer: {
    skills: SkillsReducer,
  },
});

export default store;
