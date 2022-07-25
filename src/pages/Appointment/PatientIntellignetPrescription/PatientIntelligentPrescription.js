import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import PatientIntelligentPrescriptionForm from "./PatientIntelligentPrescriptionForm/PatientIntelligentPrescriptionForm";

import PaperWrapper from "../../../components/PaperWrapper/PaperWrapper";

const useStyles = makeStyles({
  marginBot: {
    marginBottom: "1em",
  },
});

function PatientIntelligentPrescription() {
  const classes = useStyles();

  return (
    <PaperWrapper>
      <PatientIntelligentPrescriptionForm />
    </PaperWrapper>
  );
}

export default PatientIntelligentPrescription;
