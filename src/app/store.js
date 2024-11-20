import { configureStore } from "@reduxjs/toolkit";
import fieldsReducer from "../features/fields/fieldSlice";
import { fieldsApi } from "../services/fieldsService";

export const store = configureStore({
  reducer: {
    fieldsReducer,
    [fieldsApi.reducerPath]: fieldsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fieldsApi.middleware),
});
