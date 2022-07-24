import React from "react";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import * as ROUTES from "../../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

function AppointmentPage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <DashboardLayout pageTitle="Appointment">
      <div>This is appointment page...</div>
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(AppointmentPage);
