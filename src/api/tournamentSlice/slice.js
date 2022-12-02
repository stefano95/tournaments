import { createSlice } from "@reduxjs/toolkit";
import { fetchTournaments } from "./requests";

const initialState = {
  tournamentsList: [],
  filteredTournamentsList: [],
  tournamentCountries: [],
  filter: {
    name: "",
    country: "",
    both: "",
  },
};

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    filterTournamentsByName: (state, action) => {
      const filtered = state.tournamentsList.filter(
        (t) =>
          t.name.toLowerCase().includes(action.payload.toLowerCase()) &&
          t.country.name.toLowerCase().includes(state.filter.country) &&
          t.country.name.toLowerCase().includes(state.filter.both) &&
          t.name.toLowerCase().includes(state.filter.both)
      );

      state.filteredTournamentsList = filtered;
      state.filter.name = action.payload.toLowerCase();
    },
    filterTournamentsByCountry: (state, action) => {
      const filtered = state.tournamentsList.filter(
        (t) =>
          t.country.name.toLowerCase().includes(action.payload.toLowerCase()) &&
          t.name.toLowerCase().includes(state.filter.name) &&
          t.country.name.toLowerCase().includes(state.filter.both) &&
          t.name.toLowerCase().includes(state.filter.both)
      );
      state.filteredTournamentsList = filtered;
      state.filter.country = action.payload.toLowerCase();
    },
    filterTournamentsByNameAndCountry: (state, action) => {
      const filtered = state.tournamentsList.filter(
        (t) =>
          t.name.toLowerCase().includes(action.payload.toLowerCase()) &&
          t.country.name.toLowerCase().includes(action.payload.toLowerCase()) &&
          t.country.name.toLowerCase().includes(state.filter.country) &&
          t.name.toLowerCase().includes(state.filter.name)
      );
      state.filteredTournamentsList = filtered;
      state.filter.both = action.payload.toLowerCase();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTournaments.fulfilled, (state, action) => {
      state.tournamentsList = action.payload.data;
      state.filteredTournamentsList = action.payload.data;

      const countries = action.payload.data
        .map((t) => t.country)
        .filter(
          (country, i, list) => i === list.findIndex((c) => c.id === country.id)
        );
      state.tournamentCountries = countries;
    });
  },
});

export default tournamentSlice;
