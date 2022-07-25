import React from "react";

import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import Schedule from "./components/ScheduleCalender";

import * as ROUTES from "../../constants/routes";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

function CalenderPage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <DashboardLayout pageTitle="Calender">
      <Schedule />
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(CalenderPage);
