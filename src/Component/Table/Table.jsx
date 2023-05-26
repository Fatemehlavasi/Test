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


function createData(id, fullname, number) {
  return { id, fullname, number };
}

const rows = [
  createData(1, "محمد کرمی ", 58475898),
  createData(2, "حجت فضایلی ", 58475898),
];

function TableNumber() {
  return (
    <TableContainer component={Paper} sx={{ color: "red" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox color="primary" defaultChecked />
            </TableCell>
            <TableCell sx={{ width: 40 }}>ردیف</TableCell>
            <TableCell sx={{ width: 120 }}>نام و نام خانوادگی </TableCell>
            <TableCell sx={{ width: 130 }}>شماره تلفن </TableCell>
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
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.fullname}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>
                <Button
                  sx={{
                    width: "150px",
                    // color: "common.white",
                    borderRadius: 2,
                    bgcolor: "common.white",
                    color: "common.dark",
                    border: "1px solid",
                    // borderColor: "primary.dark",
                  }}
                >
                  حذف مخاطب
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableNumber;
