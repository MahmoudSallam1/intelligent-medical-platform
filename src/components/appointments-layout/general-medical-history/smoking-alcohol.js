import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

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
  btnGroup: {
    textAlign: "center",
  },
}));

function SmokingAlcohol({
  formData,
  setFormData,
  nextStep,
  prevStep,
  activeStep,
  steps,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selection, setSelection] = React.useState();

  const updateSelection = (event, value) => {
    setSelection(value);
  };

  function handleNext(e) {
    e.preventDefault();
    nextStep();
  }

  function handleBack(e) {
    e.preventDefault();
    prevStep();
  }
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
      <br></br>
      <br></br>
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
    </div>
  );
}

export default SmokingAlcohol;
