import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import PrescriptionForm from "./prescription-form";

import PaperWrapper from "../../PaperWrapper/PaperWrapper";

const useStyles = makeStyles({
  marginBot: {
    marginBottom: "1em",
  },
});

function PrescriptionLayout() {
  const classes = useStyles();

  return (
    <PaperWrapper>
      <PrescriptionForm />
    </PaperWrapper>
  );
}

export default PrescriptionLayout;
