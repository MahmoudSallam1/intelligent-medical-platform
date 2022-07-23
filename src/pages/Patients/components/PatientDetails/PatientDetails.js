import React, { useState, useEffect, useRef } from "react";
import firebase from "../../../../firebase/firebase";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { useReactToPrint } from "react-to-print";

import * as ROUTES from "../../../../constants/routes";

import ModernCard from "../../../../components/modern-card/modern-card";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  subHeading: {
    color: "#5f6c7b",
    fontWeight: "400",
  },
  info: {
    color: "#1DB5E4",
    fontWeight: "500",
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

const db = firebase.firestore();

function PatientDetails(props) {
  const patientInfo = useRef();
  const handlePrint = useReactToPrint({
    content: () => patientInfo.current,
  });

  const classes = useStyles();
  let history = useHistory();

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

  const handleDeletePatient = () => {
    db.collection(`doctors/${auth.uid}/patients`)
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        history.push(ROUTES.PATIENTS);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPatientDetails();
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          {" "}
          <div>
            <div className={classes.btnGroup}>
              {" "}
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                endIcon={<PrintIcon />}
                onClick={handlePrint}
              >
                Print
              </Button>
              <Button
                className={classes.btn}
                startIcon={<DeleteIcon />}
                variant="outlined"
                color="primary"
                onClick={handleDeletePatient}
              >
                Delete
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid ref={patientInfo} container spacing={3}>
        <Grid item xs={12}>
          {patient.patientInformation ? (
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={`${ROUTES.MEDICAL_HISTORY}/${id}`}
            >
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
                        {(patient.patientInformation &&
                          patient.patientInformation.fullName) ||
                          "--"}
                      </span>
                    </Typography>
                    <Typography
                      className={classes.subHeading}
                      variant="subtitle2"
                      gutterBottom
                    >
                      Gender :{" "}
                      <span className={classes.info}>
                        {(patient.patientInformation &&
                          patient.patientInformation.gender) ||
                          "--"}
                      </span>
                    </Typography>
                    <Typography
                      className={classes.subHeading}
                      variant="subtitle2"
                      gutterBottom
                    >
                      Address :{" "}
                      <span className={classes.info}>
                        {(patient.patientInformation &&
                          patient.patientInformation.address) ||
                          "--"}
                      </span>
                    </Typography>
                    <Typography
                      className={classes.subHeading}
                      variant="subtitle2"
                      gutterBottom
                    >
                      Phone Number:{" "}
                      <span className={classes.info}>
                        {(patient.patientInformation &&
                          patient.patientInformation.phoneNumber) ||
                          "--"}
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
                        {(patient.patientInformation &&
                          patient.patientInformation.emergencyFullName) ||
                          "--"}
                      </span>
                    </Typography>
                    <Typography
                      className={classes.subHeading}
                      variant="subtitle2"
                      gutterBottom
                    >
                      Emergency Phone Number :{" "}
                      <span className={classes.info}>
                        {(patient.patientInformation &&
                          patient.patientInformation.emergencyPhoneNumber) ||
                          "--"}
                      </span>
                    </Typography>
                    <Typography
                      className={classes.subHeading}
                      variant="subtitle2"
                      gutterBottom
                    >
                      Relation :{" "}
                      <span className={classes.info}>
                        {(patient.patientInformation &&
                          patient.patientInformation.relation) ||
                          "--"}
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </ModernCard>
            </Link>
          ) : !patient.patientInformation ? (
            <CircularProgress />
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          {patient.medicalData ? (
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={`${ROUTES.PATIENT_DATA}/${id}`}
            >
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
                    🤤 Diagnosis :{" "}
                    <span className={classes.info}>
                      {(patient.medicalData && patient.medicalData.diagnosis) ||
                        "--"}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    🤒 Symptoms :{" "}
                    <span className={classes.info}>
                      {(patient.medicalData && patient.medicalData.symptoms) ||
                        "--"}
                    </span>
                  </Typography>
                </div>
              </ModernCard>
            </Link>
          ) : !patient.patientInformation ? (
            <CircularProgress />
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          {patient.prescriptions ? (
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={`${ROUTES.PRESCRIPTION}/${id}`}
            >
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
                    💊 Medications :{" "}
                    <span className={classes.info}>
                      {(patient.prescriptions &&
                        patient.prescriptions.medications) ||
                        "--"}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subHeading}
                    variant="subtitle2"
                    gutterBottom
                  >
                    💊 Dosages :{" "}
                    <span className={classes.info}>
                      {(patient.prescriptions &&
                        patient.prescriptions.dosages) ||
                        "--"}
                    </span>
                  </Typography>
                </div>
              </ModernCard>
            </Link>
          ) : !patient.patientInformation ? (
            <CircularProgress />
          ) : null}
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

export default connect(mapStateToProps)(PatientDetails);
