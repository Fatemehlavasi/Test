import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Button, Grid, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalBox({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid display={"flex"} alignItems={"center"} gap={"10px"}>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Button
                sx={{
                  height: "40px",
                  width: "140px",
                  bgcolor: "rgba(64, 81, 59, 0.1)",
                  color: "#212121",
                  fontSize: "13.4775px",
                  fontWeight: "900",
                  borderRadius: "3.85072px",
                  fontFamily:"Iranyekanwebregular"
                }}
              >
                آپلود تصویر
              </Button>
              <Button
                sx={{
                  height: "40px",
                  width: "40px",
                  color: "#212121",
                  fontSize: "13.4775px",
                  fontWeight: "900",
                  border: "0.98595px solid #616161",
                  borderRadius: "5px",
                  fontFamily:"Iranyekanwebregular"
                }}
              >
                حذف
              </Button>
            </Grid>
            <Grid>
              <Button  onClick={handleClose}>
              <CloseIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid gap={"30px"} mt={"30px"} display={"flex"}>
            <Grid sx={{ width: 350 }}>
              <Typography id="modal-modal-title" variant="h6" component="h2"  fontFamily="Iranyekanwebregular">
               نام و نام خانوادگی :
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 330 }}
              />
            </Grid>
            <Grid>
              <Typography id="modal-modal-description" sx={{ mt: 1 , fontFamily:"Iranyekanwebregular"}}>
                شماره تلفن :
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 330 }}
              />
            </Grid>
          </Grid>
          <Grid mt={"20px"}>
            <Button
              onClick={handleClose}
              sx={{
                height: "40px",
                width: "150px",
                bgcolor: "rgba(64, 81, 59, 1)",
                color: "#fff",
                fontSize: "13.4775px",
                fontWeight: "900",
                border: "0.98595px solid #616161",
                borderRadius: "3.85072px",
                fontFamily:"Iranyekanwebregular"
              }}
            >
              تایید
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalBox;
