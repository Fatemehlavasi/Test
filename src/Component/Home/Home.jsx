import React, { useState } from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import Table from "../Table/Table";
// import Modal from "@mui/material/Modal";
// import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import {Modal} from "../Table/Modal";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Home() {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid
      sx={{
        width: "90%",
        height: "atuo",
        p: "1rem",
        borderRadius: "0.25rem",
        bgcolor: "#4949",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap-reverse",
        }}
      >
        <Button
          onClick={handleOpen}
          sx={{
            width: "150px",
            borderRadius: 2,
            bgcolor: "common.white",
            color: "common.dark",
            border: "1px solid",
          }}
        >
          ایجاد همکار{" "}
        </Button>
       {/* <Modal open={open} handleClose={handleClose} /> */}
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </Grid>
      <Grid>
        <Table />
      </Grid>
    </Grid>
  );
}

export default Home;
