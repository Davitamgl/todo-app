import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

export default configureStore({
  reducer: {
    todo: todoReducer
  },
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
});
