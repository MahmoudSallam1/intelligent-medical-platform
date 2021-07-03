import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import GeneralMedicalHistoryForm from "./general-medical-history-form";

import PaperWrapper from "../../paper-wrapper/paper-wrapper";

const useStyles = makeStyles({
  marginBot: {
    marginBottom: "1em",
  },
});

function GeneralMedicalHistory() {
  const classes = useStyles();

  return (
    <PaperWrapper>
      <GeneralMedicalHistoryForm />
    </PaperWrapper>
  );
}

export default GeneralMedicalHistory;
