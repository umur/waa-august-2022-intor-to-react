import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import studentSlice from "./studentSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    student: studentSlice
  },
});
