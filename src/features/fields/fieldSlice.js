import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    // Estado inicial de tus campos
    field1: "",
    field2: "",
  },
};

const fieldSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    // actualiza el valor de un campo específico.
    setField: (state, action) => {
      const { field, value } = action.payload;
      state.value[field] = value;
    },
    // limpia el valor de un campo específico.
    clearField: (state, action) => {
      const { field } = action.payload;
      state.value[field] = "";
    },
  },
});

export const { setField, clearField } = fieldSlice.actions;

export default fieldSlice.reducer;
