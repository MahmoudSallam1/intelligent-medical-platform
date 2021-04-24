import React from "react";

import AppointmentLayout from "../components/appointments-layout/appointment-layout";
import PatientData from "../components/appointments-layout/patient-data/patient-data";

import * as ROUTES from "../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

function PatientDataPage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <AppointmentLayout>
      <PatientData />
    </AppointmentLayout>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PatientDataPage);
