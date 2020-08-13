import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

//const [open, setOpen] = React.useState(false);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

// const body = ({ name, id, open }) => {
export default function Mod(props) {
  // handleChange = (date) => {
  //   this.setState({
  //     startDate: date,
  //   });
  //   console.log(startDate + "Selected");
  // };

  // var selectedDate = Date;
  // searchValue = "";
  const classes = useStyles();

  // const CustomInput = ({ value, onClick }) => (
  //   <Button variant="outlined" color="primary" onClick={onClick}>
  //     {value}
  //   </Button>
  // );

  // const getDayClassName = (date) => (getDate(date) <= 5 ? "highlight" : "");

  // const today = new Date();
  // let in3Days = new Date();
  // in3Days.setDate(in3Days.getDate() + 3);

  const [modalStyle] = React.useState(getModalStyle);
  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <div>
      <Modal
        key={props.id}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <div style={modalStyle} className={classes.paper}>
            <div style={{ float: "left" }}>
              <h4 id="simple-modal-title" style={{ fontFamily: "candara" }}>
                ID: {props.id}
              </h4>
              <h4
                id="simple-modal-description"
                style={{ fontFamily: "candara" }}
              >
                Name: {props.name}
              </h4>
              <h4 id="tzn" style={{ fontFamily: "candara" }}>
                TimeZone: {props.tz}
              </h4>
              {/* {props.display.map((ap) => (
              <p id="aps">{ap.activity_periods}</p>
            ))} */}
              {/* <DatePicker selected={} /> */}
            </div>
            <div style={{ float: "right" }}>
              <h4 style={{ fontFamily: "candara" }}>
                Select date to view Active History
              </h4>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2020-08-14"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
