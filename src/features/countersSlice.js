import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counters: [
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 5 },
    { id: 4, value: 3 },
  ],
};

const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    incremented: (state, action) => {
      const index = state.counters.findIndex((c) => c.id === action.payload.id);
      state.counters[index].value++;
    },
    decremented: (state, action) => {
      const index = state.counters.findIndex((c) => c.id === action.payload.id);
      state.counters[index].value--;
    },
    deleted: (state, action) => {
      const index = state.counters.findIndex((c) => c.id === action.payload.id);
      state.counters.splice(index, 1);
    },
    reset: (state) => {
      state.counters.forEach((c) => (c.value = 0));
    },
  },
});

export const { incremented, decremented, deleted, reset } =
  countersSlice.actions;

export default countersSlice.reducer;
