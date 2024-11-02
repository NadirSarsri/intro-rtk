import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/countersSlice";

export default configureStore({
  reducer: {
    counters: countersReducer,
  },
});
