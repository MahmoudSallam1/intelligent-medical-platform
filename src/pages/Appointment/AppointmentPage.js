import React from "react";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import * as ROUTES from "../../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import AppointmentNavigation from "./components/AppointmentNavigation";
import PaperWrapper from "../../components/PaperWrapper/PaperWrapper";

function AppointmentPage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <DashboardLayout pageTitle="Appointment">
      <PaperWrapper>
        {" "}
        <AppointmentNavigation />
      </PaperWrapper>

   
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(AppointmentPage);
