import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";
import firebase from "../../firebase/firebase";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import PaperWrapper from "../paper-wrapper/paper-wrapper";
import ModernCard from "../modern-card/modern-card";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  whiteHeading: {
    color: "#fff",
  },
  subHeading: {
    color: "#5f6c7b",
    fontWeight: "400",
    fontSize: "11px",
  },
  info: {
    color: "#404040",
    fontWeight: "500",
    fontSize: "11px",
  },
  container: {
    marginTop: theme.spacing(12),
    padding: "2em",
  },
  btn: {
    marginLeft: "1em",
  },
  btnGroup: {
    textAlign: "center",
    marginBottom: "1em",
  },
}));

function Dashboard({ auth }) {
  const [patients, setPatients] = useState([]);

  const classes = useStyles();

  const getPatientsList = () => {
    db.collection(`doctors/${auth.uid}/patients`)
      .get()
      .then((res) => {
        const fetchPatients = [];
        res.forEach((document) => {
          const fetchedPatient = {
            id: document.id,
            ...document.data(),
          };
          fetchPatients.push(fetchedPatient);
        });
        const rows = fetchPatients.slice(0, 4).map((doc) => {
          return { ...doc.patientInformation, id: doc.id };
        });

        setPatients(rows);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPatientsList();
  }, []);

  console.log(patients);

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4}>
          <ModernCard classStyle="style2">
            <Typography variant="h6" gutterBottom>
              Patient Information
            </Typography>
          </ModernCard>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ModernCard classStyle="style2">hellow </ModernCard>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <ModernCard color="light" classStyle="style2">
            {" "}
            <Typography
              className={classes.whiteHeading}
              variant="h6"
              gutterBottom
            >
              Next Appoitments
            </Typography>{" "}
            <Divider style={{ background: "#E0E0E0" }} />
            <br></br>
            {patients.length ? (
              patients.map((patient) => (
                <ModernCard key={patient.id} classStyle="style3">
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    <span className={classes.info}>
                      {(patient && patient.fullName) || "--"}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {(patient && patient.phoneNumber) || "--"}
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {(patient && patient.address) || "--"}
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {/* {(patient && patient.createdAt.toDate().toDateString()) ||
                      "--"}{" "} */}
                    <span className={classes.info}>
                      {(patient &&
                        patient.createdAt
                          .toDate()
                          .toLocaleTimeString("en-US")) ||
                        ""}
                    </span>
                  </Typography>
                </ModernCard>
              ))
            ) : (
              <CircularProgress style={{ color: "#fff" }} />
            )}
          </ModernCard>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
