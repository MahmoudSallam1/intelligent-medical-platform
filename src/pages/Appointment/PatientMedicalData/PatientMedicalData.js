import React from "react";

import PatientMedicalDataForm from "./PatientMedicalDataForm/PatientMedicalDataForm";

import PaperWrapper from "../../../components/PaperWrapper/PaperWrapper";
import { Redirect } from "react-router-dom";

import * as ROUTES from "../../../constants/routes";
import { connect } from "react-redux";

function PatientMedicalData(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;

  return (
    <>
      <PaperWrapper>
        <PatientMedicalDataForm />
      </PaperWrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PatientMedicalData);
