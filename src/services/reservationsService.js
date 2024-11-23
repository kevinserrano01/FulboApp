import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reservationsApi = createApi({
  reducerPath: "reservationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    // Agregar la consulta para obtener todas las reservas
    getReservations: builder.query({
      query: () => `reservations.json`,
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
    // Agregar la consulta para obtener una reserva por id
    getReservation: builder.query({
      query: (reservationId) =>
        `reservations.json?orderBy="id"&equalTo=${reservationId}`,
      transformResponse: (response) =>
        response ? Object.values(response)[0] : null,
    }),
    // Agregar la mutación para crear una nueva reserva
    postReservation: builder.mutation({
      query: ({ ...reservation }) => ({
        url: `reservations.json`,
        method: "POST",
        body: { reservation },
      }),
    }),
  }),
});

export const {
  useGetReservationsQuery,
  useGetReservationQuery,
  usePostReservationMutation,
} = reservationsApi;
