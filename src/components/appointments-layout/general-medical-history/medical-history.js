import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";

import { patientGeneralMedicalHistoryArray } from "./medical-history-array";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  breath: {
    marginTop: "1em",
    textAlign: "left",
  },
  ourForm: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
    placeContent: "center",
  },
  ourFlex: {
    display: "flex",
    flexDirection: "row",
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

function MedicalHistory({
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
        <Typography className={classes.gray} variant="h6" gutterBottom>
          Are you allergic to any of the following?
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
          label="Penicillin"
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
          label="Aspirin"
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
          label="Codeine"
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
          label="Local Anesthetics"
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
          label="Acrylic"
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
          label="Metal"
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
          label="Latex"
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
          label="Sulfa drugs"
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
          label="Other"
        />
      </form>
      <div className={classes.breath}>
        <Typography className={classes.gray} variant="h6" gutterBottom>
          Do you have, or have you had, any of the following?
        </Typography>
      </div>

      <Grid container>
        {patientGeneralMedicalHistoryArray.slice(0, 20).map((item) => (
          <Grid key={item.id} item xs={6} sm={4} md={4} lg={3}>
            <FormLabel className={classes.breath} component="legend">
              {item.question}
            </FormLabel>
            <RadioGroup className={classes.ourFlex}>
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
          </Grid>
        ))}
      </Grid>

      <div className={classes.breath}>
        <Typography className={classes.gray} variant="h6" gutterBottom>
          Women: Are you
        </Typography>
      </div>

      <Grid container>
        <Grid item xs={6} sm={4} md={4} lg={4}>
          <FormLabel className={classes.breath} component="legend">
            Pregnant/Trying to get pregnant?
          </FormLabel>
          <RadioGroup className={classes.ourFlex}>
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
        </Grid>

        <Grid item xs={6} sm={4} md={4} lg={4}>
          <FormLabel className={classes.breath} component="legend">
            Taking oral contraceptives?
          </FormLabel>
          <RadioGroup className={classes.ourFlex}>
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
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={4}>
          <FormLabel className={classes.breath} component="legend">
            Nursing?
          </FormLabel>
          <RadioGroup className={classes.ourFlex}>
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
        </Grid>
      </Grid>
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

export default MedicalHistory;
