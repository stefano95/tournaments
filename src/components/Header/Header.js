import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderStyles";
import {
  filterTournamentsByCountry,
  filterTournamentsByName,
  filterTournamentsByNameAndCountry,
  selectTournaments,
} from "../../api/tournamentSlice";

import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const dispatch = useDispatch();
  const tournamentsList = useSelector(selectTournaments);

  const handleSearch = (e, filter) => {
    switch (filter) {
      case "name":
        return dispatch(filterTournamentsByName(e.target.value));
      case "country":
        return dispatch(filterTournamentsByCountry(e.target.value));
      default:
        return dispatch(filterTournamentsByNameAndCountry(e.target.value));
    }
  };

  return (
    <Grid
      marginX={-3}
      mb={5}
      py={2}
      gap={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        backgroundColor: "rgb(200,200,200)",
      }}
    >
      <Grid textAlign="center" item>
        <p>
          {tournamentsList.length > 0
            ? `${tournamentsList.length} tournaments in
              the database`
            : "No tournaments found"}
        </p>
      </Grid>

      <Grid display={"flex"} justifyContent="center" flexWrap="wrap" gap={2}>
        <Grid item>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by name…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e, "name")}
            />
          </Search>
        </Grid>
        <Grid item>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by country..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e, "country")}
            />
          </Search>
        </Grid>
        <Grid item>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by name and country..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e, "both")}
            />
          </Search>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
