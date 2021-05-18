import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonIcon from "@material-ui/icons/Person";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: "1em",
  },
}));
export default function SimpleTabs({ children, tab, handleTabChange }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        className={classes.appBar}
        color="primary"
        elevation={0}
        position="static"
      >
        <Tabs
          // indicatorColor="primary"
          value={tab}
          variant="fullWidth"
          onChange={handleTabChange}
          aria-label="simple tabs example"
        >
          <Tab
            icon={<PersonIcon />}
            label="Personal Information"
            {...a11yProps(0)}
          />
          <Tab
            icon={<LocalHospitalIcon />}
            label="Clinic Information"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      {children}
    </div>
  );
}
