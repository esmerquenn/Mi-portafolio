import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "", 
};

const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    setCursorText: (state, action) => {
      state.text = action.payload; 
    },
  },
});

export const { setCursorText } = cursorSlice.actions;
export default cursorSlice.reducer;
