import React from "react";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import * as ROUTES from "../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import PatientDetails from "../components/patients/patient-details/patient-details";

function PatientDetailsPage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <DashboardLayout pageTitle="Patient Details">
      <PatientDetails />
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PatientDetailsPage);
