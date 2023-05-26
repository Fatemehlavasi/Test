import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Home from "./Component/Home/Home";
import { Grid, Button } from "@mui/material";

function App() {

  return (
    <Grid
      sx={{
        width: "100%",
        bgcolor: "#ffff",

      }}
    >
     
      <Home />
    </Grid>
  );
}

export default App;
