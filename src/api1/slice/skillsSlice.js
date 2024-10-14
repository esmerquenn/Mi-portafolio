import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { name: "React JS", header: "Framework", icon: "./assets/react.png", bg: "bg-redy" },
  { name: "JavaScript", header: "Basics", icon: "./assets/js.png", bg: "bg-middleGreen" },
  { name: "HTML", header: "Basics", icon: "./assets/html.png", bg: "bg-brown" },
  { name: "CSS", header: "Basics", icon: "./assets/css.png", bg: "bg-olivegreen" },
  { name: "GSAP", header: "Animation", icon: "./assets/gsap.png", bg: "bg-olivegreen" },
  { name: "TypeScript", header: "Basics", icon: "./assets/ts.png", bg: "bg-redy" },
  { name: "Redux Toolkit", header: "Basics", icon: "./assets/rtk.png", bg: "bg-lightGreen" },
  { name: "Next JS", header: "Basics", icon: "./assets/next.png", bg: "bg-brown" },
  { name: "Bootstrap", header: "FrameWork", icon: "./assets/b.png", bg: "bg-redy" },
  { name: "Tailwind CSS", header: "FrameWork", icon: "./assets/tw.png", bg: "bg-middleGreen" },
  { name: "Github", header: "Platform", icon: "./assets/gh.png", bg: "bg-olivegreen" },
  { name: "Ant Design", header: "Framework", icon: "./assets/ant.png", bg: "bg-brown" },
  { name: "Ajax", header: "Tool", icon: "./assets/ajax.png", bg: "bg-olivegreen" },
  { name: "Git", header: "Tool", icon: "./assets/git.png", bg: "bg-redy" },
  { name: "Alpine JS", header: "Framework", icon: "./assets/alpine.png", bg: "bg-middleGreen" },
  { name: "Postman", header: "Tool", icon: "./assets/postman.png", bg: "bg-lightGreen" },
  { name: "i18Next", header: "Language", icon: "./assets/i18.png", bg: "bg-brown" },
  { name: "Material TW", header: "Framework", icon: "./assets/mtw.png", bg: "bg-redy" },
  { name: "Docker", header: "Tool", icon: "./assets/docker.png", bg: "bg-olivegreen" },
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
export const skillsData = (store) => store.skills;
export default skillsSlice.reducer;
