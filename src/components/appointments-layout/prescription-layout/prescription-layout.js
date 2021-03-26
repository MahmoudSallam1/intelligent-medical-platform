import React from "react";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import HorizontalLinearStepper from "../stepper/stepper";

import OurGrid from "../../grid/grid";

import Prescription from './prescription'
import Done from './done'

const useStyles = makeStyles({
  breath: {
    padding: "2em",
  },
  marginBot: {
    marginBottom: "1em",
  },
});

const steps = ["Prescription", "Done"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Prescription />;
    case 1:
      return <Done />;
    default:
      return null;
  }
}
function PrescriptionLayout() {
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
            Prescription{" "}
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

export default PrescriptionLayout;
