import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import PrescriptionForm from "./prescription-form";

import PaperWrapper from "../../paper-wrapper/paper-wrapper";

const useStyles = makeStyles({
  marginBot: {
    marginBottom: "1em",
  },
});

function PrescriptionLayout() {
  const classes = useStyles();

  return (
    <PaperWrapper>
      <Typography
        className={classes.marginBot}
        align={"center"}
        variant="h5"
        gutterBottom
      >
        Prescription
      </Typography>
      <PrescriptionForm />
    </PaperWrapper>
  );
}

export default PrescriptionLayout;
