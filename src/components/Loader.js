import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../api/dialogSlice";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    isLoading && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CircularProgress />
      </Box>
    )
  );
};

export default Loader;
