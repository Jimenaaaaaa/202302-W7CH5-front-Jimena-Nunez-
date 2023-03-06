import { createReducer } from "@reduxjs/toolkit";
import { loadOneCreator } from "./user.actions.creator";

const initialState: [] = [];

export const usersReducer = createReducer(initialState, (builder) => {
  // Tengo que ver en que me falla
  // builder.addCase(loadAllCreator, (state, { payload }) => payload);

  builder.addCase(loadOneCreator, (state, { payload }) => {
    return {
      ...state,
      selectedDog: payload.id,
    };
  });

  builder.addDefaultCase((state) => state);
});
