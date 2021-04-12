import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  breath: {
    marginTop: "2em",
    textAlign: "left",
  },
  ourForm: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
    placeContent: "center",
  },
  gray: {
    color: "#424242",
    fontWeight: "500",
    fontSize: "1.1rem",
  },
}));

function SmokingAlcohol() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selection, setSelection] = React.useState();

  const updateSelection = (event, value) => {
    setSelection(value);
  };
  return (
    <div>
      <div className={classes.breath}>
        <Typography variant="h6" gutterBottom>
          Smoking and Alcoholic drinks
        </Typography>
        <br />
        <Typography className={classes.gray} variant="h6" gutterBottom>
          Have you ever smoked cigarettes, cigars, or a pipe?
        </Typography>
        <form
          className={classes.form}
          //   noValidate
        >
          <RadioGroup
            aria-label="smoking1"
            name="smoking"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>

          <br />

          <Typography className={classes.gray} variant="h6" gutterBottom>
            Do you ever drink alcoholic beverages?
          </Typography>
          <RadioGroup
            aria-label="alcoholic1"
            name="alcohol"
            value={selection}
            onChange={updateSelection}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </form>{" "}
      </div>
    </div>
  );
}

export default SmokingAlcohol;
