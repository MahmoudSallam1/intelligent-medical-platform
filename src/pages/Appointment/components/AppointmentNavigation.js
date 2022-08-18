import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PatientGeneralInformation from "../PatientGeneralInformation/PatientGeneralInformation";
import PatientMedicalData from "../PatientMedicalData/PatientMedicalData";
import PatientIntelligentPrescription from "../PatientIntellignetPrescription/PatientIntelligentPrescription";
import OCR from "../OCR/OCR";
import Radiology from "../Radiology/Radiology";

import { useTranslation } from "react-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { t } = useTranslation();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function AppointmentNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label={t("appointment_general_information")} {...a11yProps(0)} />
          <Tab label={t("appointment_medical_data")} {...a11yProps(1)} />
          <Tab
            label={t("appointment_intellignet_prescription")}
            {...a11yProps(2)}
          />
          <Tab label="OCR" {...a11yProps(3)} />
          <Tab
            label={t("appointment_intellignet_radiology")}
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PatientGeneralInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PatientMedicalData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PatientIntelligentPrescription />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OCR />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Radiology />
      </TabPanel>
    </div>
  );
}

export default AppointmentNavigation;
