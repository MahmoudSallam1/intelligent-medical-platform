import React, { useState } from "react";
import List from "@material-ui/core/List";

import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";

import SettingsIcon from "@material-ui/icons/Settings";
import EventNoteIcon from "@material-ui/icons/EventNote";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import * as ROUTES from "../../constants/routes";

const ListItem = withStyles({
  root: {
    // "&$selected": {
    //   backgroundColor: "#1DB5E4",
    //   color: "white",
    // },
    // "&$selected:hover": {
    //   backgroundColor: "#1DB5E4",
    //   color: "white",
    // },
    "&:hover": {
      backgroundColor: "#EEF9FE",
    },
  },
  selected: {},
})(MuiListItem);

export const MainListItems = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <List>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.DASHBOARD}
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.PATIENTS}
        >
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Patients" />
          </ListItem>
        </Link>

        <ListItem button>
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItem>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.PROFILE}
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>

      {/* second list */}

      <Divider />

      <List>
        <ListSubheader inset>Appointment</ListSubheader>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.MEDICAL_HISTORY}
        >
          {" "}
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Patient Information" />
          </ListItem>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.PATIENT_DATA}
        >
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Medical Data" />
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.PRESCRIPTION}
        >
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Prescription" />
          </ListItem>
        </Link>
      </List>
    </>
  );
};
