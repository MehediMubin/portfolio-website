import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice.js";

export const store = configureStore({
   reducer: {
      auth: authReducer,
   },
});
