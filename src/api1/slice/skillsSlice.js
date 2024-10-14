import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { name: "React JS", header: "Framework", icon: "./src/assets/react.png", bg: "bg-redy" },
  { name: "JavaScript", header: "Basics", icon: "./src/assets/js.png", bg: "bg-middleGreen" },
  { name: "HTML", header: "Basics", icon: "./src/assets/html.png", bg: "bg-brown" },
  { name: "CSS", header: "Basics", icon: "./src/assets/css.png", bg: "bg-olivegreen" },
  { name: "GSAP", header: "Animation", icon: "./src/assets/gsap.png", bg: "bg-olivegreen" },
  { name: "TypeScript", header: "Basics", icon: "./src/assets/ts.png", bg: "bg-redy" },
  { name: "Redux Toolkit", header: "Basics", icon: "./src/assets/rtk.png", bg: "bg-lightGreen" },
  { name: "Next JS", header: "Basics", icon: "./src/assets/next.png", bg: "bg-brown" },
  { name: "Bootstrap", header: "FrameWork", icon: "./src/assets/b.png", bg: "bg-redy" },
  { name: "Tailwind CSS", header: "FrameWork", icon: "./src/assets/tw.png", bg: "bg-middleGreen" },
  { name: "Github", header: "Platform", icon: "./src/assets/gh.png", bg: "bg-olivegreen" },
  { name: "Ant Design", header: "Framework", icon: "./src/assets/ant.png", bg: "bg-brown" },
  { name: "Ajax", header: "Tool", icon: "./src/assets/ajax.png", bg: "bg-olivegreen" },
  { name: "Git", header: "Tool", icon: "./src/assets/git.png", bg: "bg-redy" },
  { name: "Alpine JS", header: "Framework", icon: "./src/assets/alpine.png", bg: "bg-middleGreen" },
  { name: "Postman", header: "Tool", icon: "./src/assets/postman.png", bg: "bg-lightGreen" },
  { name: "i18Next", header: "Language", icon: "./src/assets/i18.png", bg: "bg-brown" },
  { name: "Material TW", header: "Framework", icon: "./src/assets/mtw.png", bg: "bg-redy" },
  { name: "Docker", header: "Tool", icon: "./src/assets/docker.png", bg: "bg-olivegreen" },
];
const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    filterSkill: (state, action) => {
      const actionHeader = action.payload;
      console.log(state, "state");

      return initialState.filter((item) => item.header == actionHeader);
    },
    resetSkill: (state, action) => {
      return initialState;
    },
  },
});
export const { filterSkill, resetSkill } = skillsSlice.actions;
export const skillsData = (state) => state.skills;
export default skillsSlice.reducer;
