import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTournaments,
  selectCountries,
  selectTournaments,
} from "../../api/tournamentSlice";

import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid } from "@mui/material";

const tournamentColumns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 280 },
  {
    field: "country",
    headerName: "Country",
    width: 120,
    valueGetter: (params) => params.row.country.name,
  },
];

const countriesColumns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 180 },
  {
    field: "url_flag",
    headerName: "Flag",
    width: 80,
    renderCell: (params) => {
      return (
        <img
          src={params.row.url_flag}
          alt={`${params.name}'s flag`}
          height="50"
          width="50"
        ></img>
      );
    },
  },
];

const Tournaments = () => {
  const tournaments = useSelector(selectTournaments);
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTournaments());
  }, []);

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
        flexDirection: "row",
      }}
    >
      {" "}
      <Grid
        style={{
          width: "100%",
          maxWidth: "470px",
        }}
        item
      >
        <h3 className="">Tournaments</h3>
        {tournaments.length > 0 && (
          <Box style={{ height: "450px" }}>
            {" "}
            <DataGrid
              getRowId={(row) => row.id}
              rows={tournaments}
              columns={tournamentColumns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />{" "}
          </Box>
        )}
      </Grid>
      <Grid
        style={{
          width: "100%",
          maxWidth: "333px",
        }}
        item
      >
        <h3>Countries</h3>
        {countries.length > 0 && (
          <Box style={{ height: "450px" }}>
            {" "}
            <DataGrid
              getRowId={(row) => row.id}
              rowHeight={60}
              rows={countries}
              columns={countriesColumns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Tournaments;
