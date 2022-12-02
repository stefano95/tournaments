import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoader: 0,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.showLoader++;
    },
    hideLoader: (state) => {
      state.showLoader--;
    },
  },
});

export const { showLoader, hideLoader } = dialogSlice.actions;

export const selectIsLoading = (state) => state.dialog.showLoader > 0;

export default dialogSlice.reducer;
