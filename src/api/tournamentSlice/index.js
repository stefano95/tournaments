import tournamentSlice from "./slice";

export const {
  filterTournamentsByName,
  filterTournamentsByCountry,
  filterTournamentsByNameAndCountry,
} = tournamentSlice.actions;

export * from "./requests";
export * from "./selectors";

export default tournamentSlice.reducer;
