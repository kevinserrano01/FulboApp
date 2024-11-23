import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservations",
  initialState: {
    value: {
      reservations: [],
      reservationLength: 0,
    },
  },
  reducers: {
    addReservation: (state, action) => {
      state.value.reservations.push(action.payload);
      state.value.reservationLength += 1;
    },
    removeReservation: (state, action) => {
      state.value.reservations = state.value.reservations.filter(
        (reservation) => reservation.id !== action.payload.id,
        console.log("Eliminando reserva con id: ", action.payload.id)
      );
    },
    updateReservation: (state, action) => {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id === action.payload.id
      );
      if (index !== -1) {
        state.value.reservations[index] = action.payload;
      }
    },
  },
});

export const { addReservation, removeReservation, updateReservation } =
  reservationSlice.actions;

export default reservationSlice.reducer;
