import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles({
  table: {
    Width: "50vh",
    border: "4px strong black",
    backgroundColor: "blueGrey",
  },
  paper: {
    position: "absolute",
    width: 800,
    height: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 5,
    padding: 10,
  },
});

function createData(name, history) {
  return { name, history };
}

const rows = [createData("", 159), createData("", 237)];

export default function SimpleTable(props) {
  const classes = useStyles();

  const handleOpen = (id, name, tz, ap) => {
    props.showMod(id, name, tz, ap);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h1>User Name</h1>
            </TableCell>
            <TableCell align="right">
              <h1>History</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.display.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <h2>{row.real_name}</h2>
              </TableCell>
              <TableCell align="right">
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(event) => {
                      handleOpen(
                        row.id,
                        row.real_name,
                        row.tz,
                        row.activity_periods
                      );
                    }}
                  >
                    View History
                  </Button>
                  {/* <Modal
                    key={row.id}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <div
                      style={modalStyle}
                      className={classes.paper}
                      key={row.id}
                      id={row.id}
                    >
                      <h2 id={row.id}>{row.id}</h2>
                      <p id={row.id}>{row.real_name}</p>
                      {console.log("id", row.id)}
                    </div>
                  </Modal> */}
                </div>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
