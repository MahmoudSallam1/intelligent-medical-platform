import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  breath: {
    marginTop: "1em",
    textAlign: "left",
  },

  radio: {
    "&$focused": {
      color: "#1DB5E4",
    },
  },
  gray: {
    color: "#424242",
    fontWeight: "500",
    fontSize: "1.1rem",
  },
}));

function GeneralInformation() {
  const classes = useStyles();

  const [fullName, SetFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gender, setGender] = useState("");


  // Emergency
  const [emergencyFullName, setEmergencyFullName] = useState("");
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState("");
  const [relation, setRelation] = useState("");

  console.log(selectedDate);

  return (
    <Container>
      <form
      //   noValidate
      >
        <Grid spacing={3} container>
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              className={classes.gray}
              align={"left"}
              variant="h6"
              gutterBottom
            >
              Patient General Medical History{" "}
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              value={fullName}
              onChange={(e) => SetFullName(e.target.value)}
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="text"
              autoComplete="text"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              fullWidth
              id="address"
              label="Address"
              name="text"
              autoComplete="text"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="text"
              type="number"
              autoFocus
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                fullWidth
                onChange={(date) => setSelectedDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>

            <FormLabel className={classes.breath} component="legend">
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
            </RadioGroup>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography
              className={classes.gray}
              align={"left"}
              variant="h6"
              gutterBottom
            >
              Emergency contacts{" "}
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              value={emergencyFullName}
              onChange={(e) => setEmergencyFullName(e.target.value)}
              required
              fullWidth
              id="emergencyFullName"
              label="Full Name"
              name="text"
              autoComplete="text"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              value={emergencyPhoneNumber}
              onChange={(e) => setEmergencyPhoneNumber(e.target.value)}
              required
              fullWidth
              id="emergencyPhoneNumber"
              label="Phone Number"
              name="text"
              type="number"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              required
              fullWidth
              id="relation"
              label="Relation"
              name="text"
              autoComplete="text"
              autoFocus
            />
          </Grid>
        </Grid>
      </form>{" "}
    </Container>
  );
}

export default GeneralInformation;
