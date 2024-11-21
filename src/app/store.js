import { configureStore } from "@reduxjs/toolkit";
import fieldsReducer from "../features/fields/fieldSlice";
import reservationsReducer from "../features/reservations/reservationSlice";
import { fieldsApi } from "../services/fieldsService";
import { reservationsApi } from "../services/reservationsService";

export const store = configureStore({
  reducer: {
    fieldsReducer,
    reservationsReducer,
    [fieldsApi.reducerPath]: fieldsApi.reducer,
    [reservationsApi.reducerPath]: reservationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fieldsApi.middleware)
      .concat(reservationsApi.middleware),
});
