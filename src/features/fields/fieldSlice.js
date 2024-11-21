import { createSlice } from "@reduxjs/toolkit";

const fieldSlice = createSlice({
  name: "fields",
  initialState: {
    value: {
      fieldId: null,
    },
  },
  reducers: {
    setFieldId: (state, action) => {
      state.value.fieldId = action.payload; // Cambia el valor del id de la cancha seleccionada
    },
  },
});

export const { setFieldId } = fieldSlice.actions;

export default fieldSlice.reducer;
