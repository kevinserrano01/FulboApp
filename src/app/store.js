import { configureStore } from "@reduxjs/toolkit";
import fieldsReducer from "../features/fields/fieldSlice";
import reservationsReducer from "../features/reservations/reservationSlice";
import authReducer from "../features/auth/authSlice";
import { fieldsApi } from "../services/fieldsService";
import { reservationsApi } from "../services/reservationsService";
import { authApi } from "../services/authService";
import { userApi } from "../services/userService";

export const store = configureStore({
  reducer: {
    fieldsReducer,
    reservationsReducer,
    authReducer,
    [fieldsApi.reducerPath]: fieldsApi.reducer,
    [reservationsApi.reducerPath]: reservationsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fieldsApi.middleware)
      .concat(reservationsApi.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});
