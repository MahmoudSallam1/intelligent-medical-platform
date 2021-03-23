import React from "react";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import OurGrid from "../../grid/grid";

import HorizontalLinearStepper from "../stepper/stepper";

import GeneralInformation from "./general-information";
import MedicalHistory from "./medical-history";
import FamilialDiseases from "./familial-diseases";
import SmokingAlcohol from "./smoking-alcohol"


const useStyles = makeStyles({
  breath: {
    padding: "2em",
  },
  marginBot: {
    marginBottom: "1em",
  },
});

const steps = [
  "General information",
  "Medical history",
  "Familial diseases",
  "Smoking and Alcoholic drinks",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralInformation/>;
    case 1:
      return <MedicalHistory />;
    case 2:
      return <FamilialDiseases/>;
    default:
      return <SmokingAlcohol />;
  }
}
function GeneralMedicalHistory() {
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
            Patient General Medical History{" "}
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

export default GeneralMedicalHistory;
