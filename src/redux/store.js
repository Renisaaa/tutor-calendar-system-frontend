import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventReducer";

const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});

export default store;
