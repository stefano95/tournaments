import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";
import settings from "../settings";
const api_url = settings.api_url + "/tournaments";

export const fetchTournaments = createAsyncThunk(
  "movies/fetchTournaments",
  async (_, { dispatch }) => {
    return await api.get(dispatch, `${api_url}`);
  }
);
