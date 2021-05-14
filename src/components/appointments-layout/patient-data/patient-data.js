import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import PatientDataForm from "./patient-data-form";

import PaperWrapper from "../../paper-wrapper/paper-wrapper";

const useStyles = makeStyles({
  marginBot: {
    marginBottom: "1em",
  },
});

function PatientData() {
  const classes = useStyles();

  return (
    <PaperWrapper>
      {/* <Typography
        className={classes.marginBot}
        align={"center"}
        variant="h5"
        gutterBottom
      >
        Patient Data{" "}
      </Typography> */}
      <PatientDataForm />
    </PaperWrapper>
  );
}

export default PatientData;
