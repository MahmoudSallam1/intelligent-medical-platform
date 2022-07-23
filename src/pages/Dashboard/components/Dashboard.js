import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";
import firebase from "../../../firebase/firebase";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import PaperWrapper from "../../../components/paper-wrapper/paper-wrapper";
import ModernCard from "../../../components/modern-card/modern-card";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { ReactComponent as DeclineUser } from "./icons/decline.svg";
import { ReactComponent as AcceptUser } from "./icons/accept.svg";

import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

import PrescribedMedicineChart from "./insights/PrescribedMedicineChart";
import NumberOfPatientsChart from "./insights/NumberOfPatientsChart";
import NumberOfBookingChart from "./insights/NumberOfBookingChart";

import PatientAgeGroupChart from "./insights/PatientAgeGroupChart";
import CommonDiseasesChart from "./insights/CommonDiseasesChart";

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
  banner: {
    backgroundImage: "url(/images/bg.png)",
    backgroundRepeat: "no-repeat",
    // backgroundBlendMode: "multiply",
    backgroundColor: "#1DB5E4",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "230px",
    borderRadius: "10px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    // marginLeft:"0.7em",
    // boxShadow: "0 3px 10px rgba(0, 0, 0, .06), 0 0 3px rgba(0, 0, 0, .04)",
    transition:
      ".3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12)",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow:
        " 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)",
    },
  },
  bannerContent: {
    marginLeft: "3em",
  },
  bannerSubheading: {
    color: "#fff",
    fontWeight: "300",
  },
}));

function Dashboard({ auth, profile }) {
  const [patients, setPatients] = useState([]);
  const { personalInfo, clinicInfo } = profile;

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
        <Grid item xs={12} sm={12} md={9}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              <ModernCard classStyle="style-image">
                {" "}
                <div className={classes.bannerContent}>
                  <Typography
                    className={classes.whiteHeading}
                    align={"left"}
                    variant="h6"
                    gutterBottom
                  >
                    Welcome{" "}
                    {personalInfo &&
                      `${personalInfo.firstName} ${personalInfo.lastName}`}{" "}
                    !
                  </Typography>
                  <Typography
                    className={classes.bannerSubheading}
                    variant="subtitle2"
                  >
                    Let's check your health with us , Care with <br></br> your
                    health from now to get more live better.
                  </Typography>
                </div>{" "}
              </ModernCard>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ModernCard classStyle="style2">
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
                  <span className={classes.info}>
                    Number of Bookings(Online vs Phone) per Month
                  </span>
                </Typography>
                <NumberOfBookingChart />{" "}
              </ModernCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ModernCard classStyle="style2">
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
                  <span className={classes.info}>
                    Freqency of most Prescribed Medicine
                  </span>
                </Typography>
                <PrescribedMedicineChart />
              </ModernCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ModernCard classStyle="style2">
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
                  <span className={classes.info}>
                    Frequency of Patient Age Groups
                  </span>
                </Typography>
                <PatientAgeGroupChart />{" "}
              </ModernCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ModernCard classStyle="style2">
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
                  <span className={classes.info}>
                    Number of Patients per Month
                  </span>
                </Typography>
                <NumberOfPatientsChart />{" "}
              </ModernCard>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <ModernCard classStyle="style2">
                <Typography
                  className={classes.subHeading}
                  variant="subtitle2"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
                  <span className={classes.info}>
                    Common Diseases between Males and Females
                  </span>
                </Typography>
                <CommonDiseasesChart />
              </ModernCard>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={4}>
              <ModernCard classStyle="style2">
                Easy Money Easy Money <br></br> Honey الطحينة بقى طعمها
              </ModernCard>
            </Grid> */}
          </Grid>
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
                  <div>
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
                    >
                      {(patient && patient.phoneNumber) || "--"}
                    </Typography>
                    <Typography
                      className={classes.subHeading}
                      variant="subtitle2"
                    >
                      {(patient && patient.address) || "--"}
                    </Typography>
                    <Typography
                      className={classes.subHeading}
                      variant="subtitle2"
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
                  </div>
                  <div>
                    {" "}
                    <DeclineUser />
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      to={`${ROUTES.MEDICAL_HISTORY}/${patient.id}`}
                    >
                      <AcceptUser />
                    </Link>
                  </div>
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
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Dashboard);
