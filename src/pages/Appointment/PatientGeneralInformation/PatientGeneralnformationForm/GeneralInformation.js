import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";

import Button from "@material-ui/core/Button";

import DateFnsUtils from "@date-io/date-fns";
import { connect } from "react-redux";

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
  btnGroup: {
    textAlign: "center",
  },
}));

function GeneralInformation({
  formData,
  setFormData,
  nextStep,
  prevStep,
  activeStep,
  steps,
  auth,
}) {
  const classes = useStyles();




  function handleNext(e) {
    e.preventDefault();
    nextStep();
  }

  function handleBack(e) {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container>
      <form>
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
              value={formData.fullName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                });
              }}
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
              value={formData.address}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  address: e.target.value,
                });
              }}
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
              value={formData.phoneNumber}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phoneNumber: e.target.value,
                });
              }}
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="text"
              type="number"
              autoFocus
            />

          

            <FormLabel className={classes.breath} component="legend">
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={formData.gender}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  gender: e.target.value,
                });
              }}
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
              value={formData.emergencyFullName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  emergencyFullName: e.target.value,
                });
              }}
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
              value={formData.emergencyPhoneNumber}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  emergencyPhoneNumber: e.target.value,
                });
              }}
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
              value={formData.relation}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  relation: e.target.value,
                });
              }}
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(GeneralInformation);
