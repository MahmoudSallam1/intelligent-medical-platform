import React, { useState, useEffect } from "react";
import firebase from "../../../firebase/firebase";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import PaperWrapper from "../../paper-wrapper/paper-wrapper";

import ModernCard from "../../modern-card/modern-card";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  subHeading: {
    color: "#5f6c7b",
    fontWeight: "400",
  },
  info: {
    color: "#1DB5E4",
    fontWeight: "500",
  },
});

const db = firebase.firestore();

function PatientDetails(props) {
  const classes = useStyles();

  const { id } = useParams();
  const { auth } = props;

  const [patient, setPatient] = useState({});

  const getPatientDetails = () => {
    db.collection(`doctors/${auth.uid}/patients`)
      .doc(id)
      .get()
      .then((docRef) => {
        setPatient(docRef.data());
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPatientDetails();
  }, []);

  return (
    <PaperWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {patient.patientInformation ? (
            <ModernCard>
              {" "}
              <Typography variant="h6" gutterBottom>
                Patient Information
              </Typography>
              <Grid container justify="space-between">
                <Grid item>
                  {" "}
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Full Name :{" "}
                    <span className={classes.info}>
                      {patient.patientInformation &&
                        patient.patientInformation.fullName}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Gender :{" "}
                    <span className={classes.info}>
                      {patient.patientInformation &&
                        patient.patientInformation.gender}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Address :{" "}
                    <span className={classes.info}>
                      {patient.patientInformation &&
                        patient.patientInformation.address}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Phone Number:{" "}
                    <span className={classes.info}>
                      {patient.patientInformation &&
                        patient.patientInformation.phoneNumber}
                    </span>
                  </Typography>
                </Grid>

                <Grid item>
                  {" "}
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Emergency Full Name :{" "}
                    <span className={classes.info}>
                      {patient.patientInformation &&
                        patient.patientInformation.emergencyFullName}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Emergency Phone Number :{" "}
                    <span className={classes.info}>
                      {patient.patientInformation &&
                        patient.patientInformation.emergencyPhoneNumber}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Relation :{" "}
                    <span className={classes.info}>
                      {patient.patientInformation &&
                        patient.patientInformation.relation}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </ModernCard>
          ) : (
            <CircularProgress />
          )}
        </Grid>
        <Grid item xs={6}>
          {patient.medicalData ? (
            <ModernCard>
              {" "}
              <Typography variant="h6" gutterBottom>
                Medical Data
              </Typography>
              <div>
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                >
                  Diagnosis :{" "}
                  <span className={classes.info}>
                    {patient.medicalData &&
                      patient.medicalData.diagnosis.join(" 💊 ")}
                  </span>
                </Typography>
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                >
                  Symptoms :{" "}
                  <span className={classes.info}>
                    {patient.medicalData &&
                      patient.medicalData.symptoms.join(" 💊 ")}
                  </span>
                </Typography>
              </div>
            </ModernCard>
          ) : (
            <CircularProgress />
          )}
        </Grid>
        <Grid item xs={6}>
          {patient.prescriptions ? (
            <ModernCard>
              {" "}
              <Typography variant="h6" gutterBottom>
              Prescription
              </Typography>
              <div>
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                >
                  Medications :{" "}
                  <span className={classes.info}>
                    {patient.prescriptions &&
                      patient.prescriptions.medications.join(" 💊 ")}
                  </span>
                </Typography>
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                >
                  Dosages :{" "}
                  <span className={classes.info}>
                    {patient.prescriptions &&
                      patient.prescriptions.dosages.join(" 💊 ")}
                  </span>
                </Typography>
              </div>
            </ModernCard>
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PatientDetails);
