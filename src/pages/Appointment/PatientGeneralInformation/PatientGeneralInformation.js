import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import PatientGeneralInformationForm from "./PatientGeneralnformationForm/PatientGeneralInformationForm";

import PaperWrapper from "../../../components/PaperWrapper/PaperWrapper";
import { Redirect } from "react-router-dom";

import * as ROUTES from "../../../constants/routes";
import { connect } from "react-redux";

const useStyles = makeStyles({
  marginBot: {
    marginBottom: "1em",
  },
});

function PatientGeneralInformation(props) {
  const classes = useStyles();

  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <PaperWrapper>
      <PatientGeneralInformationForm />
    </PaperWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PatientGeneralInformation);
