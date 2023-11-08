import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/studentSlice2"

const store = configureStore({
  reducer: {
    students: studentReducer

  }
})

export default store;