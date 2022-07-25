import React from "react";

import { NavLink } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  links: {
    // border: "1px solid #E0E0E0",
    borderRadius: "30px",
    width: "60%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "1em",
    background: "#EEF9FE",
  },
  link: {
    textDecoration: "none",
    color: "#6B6C6F",
  },
}));

const activeStyle = {
  color: "#1DB5E4",
  fontWeight: "500",
  borderBottom: "1px solid #1DB5E4 ",
};
function AppointmentNavigation({ id }) {
  const classes = useStyles();

  return (
    <div className={classes.links}>
      <NavLink
        className={classes.link}
        activeStyle={activeStyle}
        to={`${ROUTES.MEDICAL_HISTORY}/${id}`}
      >
        Patient Information
      </NavLink>
      <NavLink
        className={classes.link}
        activeStyle={activeStyle}
        to={`${ROUTES.PATIENT_DATA}/${id}`}
      >
        Medical Data
      </NavLink>
      <NavLink
        className={classes.link}
        activeStyle={activeStyle}
        to={`${ROUTES.PRESCRIPTION}/${id}`}
      >
        Intelligent Prescription
      </NavLink>
    </div>
  );
}

export default AppointmentNavigation;
