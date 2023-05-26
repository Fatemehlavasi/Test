import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function createData(id, fullname, number) {
  return { id, fullname, number };
}

const rows = [
  createData(1, "محمد کرمی ", 58475898),
  createData(2, "حجت فضایلی ", 58475898),
];

function TableNumber() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox color="primary" defaultChecked />
            </TableCell>
            <TableCell sx={{ width: 40 }}>
            <Typography sx={{fontFamily:"Iranyekanwebregular"}}>ردیف</Typography>
            </TableCell>
            <TableCell sx={{ width: 160 }}>
              <th><Typography sx={{fontFamily:"Iranyekanwebregular"}}>نام و نام خانوادگی</Typography></th>
            </TableCell>
            <TableCell sx={{ width: 130 }}>
              <th> <Typography sx={{fontFamily:"Iranyekanwebregular"}}>شماره تلفن </Typography> </th>
              
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell padding="checkbox">
                <Checkbox color="primary" defaultChecked />
              </TableCell>
              <TableCell component="th" scope="row" >
                <td>{row.id}</td>
              </TableCell>
              <TableCell>
                <Grid display={"flex"} alignItems={"center"} gap={"10px"} >
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                    <td><Typography sx={{fontFamily:"Iranyekanwebregular"}}>{row.fullname}</Typography></td>
                 
                </Grid>
              </TableCell>
              <TableCell sx={{fontFamily:"Iranyekanwebregular"}}>
                <td><Typography sx={{fontFamily:"Iranyekanwebregular"}}>{row.number}</Typography></td>
              </TableCell>
              <TableCell>
                <Button
                  onClick={handleClick}
                  sx={{
                    gap: "15px",
                    color: "#FC5A5A",
                    fontSize: "13.4775px",
                    fontWeight: "900",
                    bgcolor: "rgba(252, 90, 90, 0.1)",
                    borderRadius: "3.85072px",
                    fontFamily:"Iranyekanwebregular"
                  }}
                  endIcon={<DeleteIcon />}
                >
                  حذف کردن
                </Button>
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      sx={{ width: "100%" , fontFamily:"Iranyekanwebregular" }}
                    >
                      فایل با موفقیت حذف شد ...
                    </Alert>
                  </Snackbar>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableNumber;
