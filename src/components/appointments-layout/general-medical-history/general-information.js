import React from "react";

import OurGrid from "../../grid/grid";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
    textAlign:"left"
  },

  radio: {
    "&:checked": {
      color: "#1DB5E4",
    },
  },
  ourGrid:{
  }

}));
function GeneralInformation() {
  const classes = useStyles();

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <OurGrid className={classes.ourGrid}>
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            className={classes.marginBot}
            align={"left"}
            variant="h6"
            gutterBottom
          >
            Patient General Medical History{" "}
          </Typography>
          <form
            className={classes.form}
            //   noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
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
                onChange={handleDateChange}
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
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </form>{" "}
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography
            className={classes.marginBot}
            align={"left"}
            variant="h6"
            gutterBottom
          >
           Emergency contacts{" "}
          </Typography>
          <form
            className={classes.form}
            //   noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
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
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="text"
              type="number"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="relation"
              label="Relation"
              name="text"
              autoComplete="text"
              autoFocus
            />
          </form>{" "}
        </Grid>
      </OurGrid>
    </>
  );
}

export default GeneralInformation;
