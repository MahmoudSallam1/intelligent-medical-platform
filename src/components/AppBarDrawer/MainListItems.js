import React, { useState } from "react";
import List from "@material-ui/core/List";

import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import Divider from "@material-ui/core/Divider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import EventNoteIcon from "@material-ui/icons/EventNote";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import * as ROUTES from "../../constants/routes";

import { useTranslation } from "react-i18next";

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

function MainListItems(props) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const { t } = useTranslation();

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <List>
        <Link
          style={{
            textDecoration: "none",
          }}
          to={ROUTES.APPOINTMENT}
        >
          {" "}
          <ListItem
            button
            style={{
              background: "#1DB5E4",
              color: "#fff",
              marginTop: "2em",
              marginBottom: "2em",
            }}
          >
            <ListItemIcon>
              <PersonAddIcon style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary={t("drawer_new_appointment_btn")} />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t("drawer_home")} />
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
            <ListItemText primary={t("drawer_dashboard")} />
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
            <ListItemText primary={t("drawer_patients")} />
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.CALENDER}
        >
          <ListItem button>
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary={t("drawer_calendar")} />
          </ListItem>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={ROUTES.PROFILE}
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={t("drawer_profile")} />
          </ListItem>
        </Link>

        {/* second list */}

        <Divider />
        <List>
          <ListItem button onClick={props.signOut}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={t("drawer_logout")} />
          </ListItem>{" "}
        </List>
      </List>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(MainListItems);
