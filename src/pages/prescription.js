import React from "react";
import DashboardLayout from "../components/dashboard-layout/dashboard-layout";
import PrescriptionLayout from "../components/appointments-layout/prescription-layout/prescription-layout";

import * as ROUTES from "../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

function PrescriptionPage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <DashboardLayout pageTitle="Intelligent Prescription">
      <PrescriptionLayout />
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PrescriptionPage);
