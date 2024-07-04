import { configureStore } from "@reduxjs/toolkit";
import {
   FLUSH,
   PAUSE,
   PERSIST,
   persistReducer,
   persistStore,
   PURGE,
   REGISTER,
   REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../redux/features/auth/authSlice.js";
import { baseApi } from "./api/baseApi.js";

const persistConfig = {
   key: "auth",
   storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
