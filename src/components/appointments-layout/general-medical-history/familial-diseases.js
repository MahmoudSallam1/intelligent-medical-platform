import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

function FamilialDiseases({
  formData,
  setFormData,
  nextStep,
  prevStep,
  activeStep,
  steps,
}) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
          Familial Diseases
        </Typography>

        <Typography variant="body2" gutterBottom>
          Have you or your blood relatives had any of the following (include
          grandparents, aunts and uncles, but exclude cousins, relatives by
          marriage and half-relatives)?
        </Typography>
        <br />

        <Typography className={classes.gray} variant="h6" gutterBottom>
          Check those to which the answer is yes (leave other blank).
        </Typography>
        <br />
      </div>

      <form className={classes.ourForm}>
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label="Heart attack under age 50"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Strokes under age 50"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="primary"
            />
          }
          label="High blood pressure"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
              color="primary"
              margin="normal"
            />
          }
          label="Elevated cholesterol"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange}
              name="checkedE"
              color="primary"
              margin="normal"
            />
          }
          label="Diabetes"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChange}
              name="checkedF"
              color="primary"
              margin="normal"
            />
          }
          label="Asthma or hay fever"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
              color="primary"
              margin="normal"
            />
          }
          label="Congenital heart disease"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedH}
              onChange={handleChange}
              name="checkedH"
              color="primary"
              margin="normal"
            />
          }
          label="Heart operations"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedI}
              onChange={handleChange}
              name="checkedI"
              color="primary"
              margin="normal"
            />
          }
          label="Obesity"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedJ}
              onChange={handleChange}
              name="checkedJ"
              color="primary"
              margin="normal"
            />
          }
          label="Glaucoma"
        />
      </form>
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

export default FamilialDiseases;
