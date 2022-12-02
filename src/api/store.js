import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialogSlice";
import tournamentSlice from "./tournamentSlice";

const reducer = {
  tournament: tournamentSlice,
  dialog: dialogSlice,
};

export default () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
