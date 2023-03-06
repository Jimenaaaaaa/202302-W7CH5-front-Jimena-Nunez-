import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../reducer/user.reducer";

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
