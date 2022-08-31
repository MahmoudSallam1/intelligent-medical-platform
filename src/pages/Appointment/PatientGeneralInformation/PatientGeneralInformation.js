import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import PatientGeneralInformationForm from "./PatientGeneralnformationForm/PatientGeneralInformationForm";

import PaperWrapper from "../../../components/PaperWrapper/PaperWrapper";


const useStyles = makeStyles({
  marginBot: {
    marginBottom: "1em",
  },
});

function PatientGeneralInformation() {
  const classes = useStyles();


  return (
    <PaperWrapper>
      <PatientGeneralInformationForm />
    </PaperWrapper>
  );
}

export default PatientGeneralInformation;
