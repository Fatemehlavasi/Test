import React, { useState } from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import Table from "../Table/Table";
import ModalBox from "../Table/ModalBox";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid
      sx={{
        width: "90%",
        height: "atuo",
        p: "1rem",
        mt: "200px",
        mr: "75px",
        borderRadius: "0.25rem",
        bgcolor: "#ffff",
       
      }}
    > <Typography variant="h4" sx={{fontFamily:"Iranyekanwebregular" , fontWeight:"900" , mb:"50px"}}>لیست پرسنل </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          pt: "25px",
          pb: "25px",
         
        }}
      >
        <Button
          onClick={handleOpen}
          sx={{
            height: "40px",
            width: "150px",
            color: "#212121",
            fontSize: "13.4775px",
            fontWeight: "900",
            border: "0.98595px solid #616161",
            borderRadius: "3.85072px",
           fontFamily:"Iranyekanwebregular"
          }}
        >
          ایجاد همکار
        </Button>
        <ModalBox open={open} handleClose={handleClose} />
      </Grid>
      <Grid>
        <Table />
      </Grid>
    </Grid>
  );
}

export default Home;
