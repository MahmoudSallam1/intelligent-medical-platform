import React from "react";

import AppointmentLayout from "../components/appointments-layout/appointment-layout";
import GeneralMedicalHistory from "../components/appointments-layout/general-medical-history/general-medical-history";

import * as ROUTES from "../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

function GeneralMedicalHistoryPage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;

  return (
    <AppointmentLayout>
      <GeneralMedicalHistory />
    </AppointmentLayout>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(GeneralMedicalHistoryPage);
