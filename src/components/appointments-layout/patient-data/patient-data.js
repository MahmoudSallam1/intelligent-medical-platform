import React from "react";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import HorizontalLinearStepper from "../stepper/stepper";

import OurGrid from "../../grid/grid";

import MedicalReports from "./medical-reports";
import Diagnosis from "./diagnosis";

const useStyles = makeStyles({
  breath: {
    padding: "2em",
  },
  marginBot: {
    marginBottom: "1em",
  },
});

const steps = [
  "Medical Reports",
  "Diagnosis",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <MedicalReports />;
    case 1:
      return <Diagnosis />;
    default:
      return null;
  }
}
function PatientData() {
  const classes = useStyles();

  return (
    <OurGrid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.breath}>
          <Typography
            className={classes.marginBot}
            align={"center"}
            variant="h5"
            gutterBottom
          >
            Patient Data{" "}
          </Typography>
          <HorizontalLinearStepper
            steps={steps}
            getStepContent={getStepContent}
          />
        </Paper>
      </Grid>
    </OurGrid>
  );
}

export default PatientData;
