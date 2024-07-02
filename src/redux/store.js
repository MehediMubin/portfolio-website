import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice.js";
import { baseApi } from "./api/baseApi.js";

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: authReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
});
