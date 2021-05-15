import React from "react";
import * as ROUTES from "../constants/routes";
import DashboardLayout from "../components/dashboard-layout/dashboard-layout";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "../components/profile/profile";

function ProfilePage(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />;
  return (
    <DashboardLayout pageTitle="Profile">
     <Profile/>
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ProfilePage);
