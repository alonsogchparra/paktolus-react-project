import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, slot, time) {
  return { id, slot, time };
}

const rows = [
  createData(356, [1, 2, 3], 49),
  createData(356, 16.0, 49),
  createData(356, 16.0, 49),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        size="small"
        padding="default"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">SLOT 1-3</TableCell>
            <TableCell align="right">TIME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.slot}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
