import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";

import Button from "@material-ui/core/Button";
// import SaveIcon from "@material-ui/icons/Save";



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

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                fullWidth
                value={formData.selectedDate}
                onChange={(date) => {
                  setFormData({
                    ...formData,
                    selectedDate: date,
                  });
                }}
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
      <div className={classes.btnGroup}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </Container>
  );
}

export default GeneralInformation;


