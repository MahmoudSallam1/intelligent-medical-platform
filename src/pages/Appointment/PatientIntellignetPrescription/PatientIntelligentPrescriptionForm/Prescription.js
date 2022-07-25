import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PauseIcon from "@material-ui/icons/Pause";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";
import PrintIcon from "@material-ui/icons/Print";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  gray: {
    color: "#616161",
    fontWeight: "400",
    fontSize: "1rem",
  },
  ourFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1em",
  },
  button: {
    marginLeft: "1em",
  },
  card: {
    padding: "2em",
    background: "#EEF9FE",
    borderRadius: "10px",
    border: "1px solid #E0E0E0",
  },
  doctorHeading: {
    color: "#1DB5E4",
    fontSize: "1rem",
  },
  subtitle: {
    color: "#757575",
    fontSize: "0.8rem",
    fontWeight: "400",
  },

  signature: {
    color: "#1DB5E4",
    fontSize: "0.8rem",
    fontWeight: "400",
  },
  btnGroup: {
    textAlign: "center",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginTop: "5em",
  },
}));

function Prescription({
  profile,
  patientInfo,
  formData,
  setFormData,
  nextStep,
  prevStep,
  activeStep,
  steps,
}) {
  const classes = useStyles();

  /* handle printing prescription */

  const prescriptionRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => prescriptionRef.current,
  });

  const [isRecord, setIsRecord] = useState(false);

  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  /* handling speech functions */

  const handleRecord = () => {
    setIsRecord(true);
    SpeechRecognition.startListening({
      continuous: true,
      // language: "ar-EG",
    });
  };

  const handleStop = () => {
    setIsRecord(false);
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    handleStop();
    resetTranscript();
  };

  const { personalInfo, clinicInfo } = profile;

  return (
    <Container>
      <form
      //   noValidate
      >
        <Grid spacing={3} container>
          <Grid item xs={12} md={12} lg={12}>
            <div>
              <div className={classes.btnGroup}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={isRecord ? handleStop : handleRecord}
                  endIcon={isRecord ? <PauseIcon /> : <MicIcon />}
                >
                  {isRecord ? "Pause" : "Record"}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  endIcon={<PrintIcon />}
                  onClick={handlePrint}
                >
                  Print
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <br></br>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            {!personalInfo ? (
              <CircularProgress className={classes.spinner} />
            ) : (
              <Paper
                ref={prescriptionRef}
                elevation={0}
                className={classes.card}
              >
                <div className={classes.ourFlex}>
                  {" "}
                  <div>
                    <Typography
                      className={classes.doctorHeading}
                      align={"left"}
                      variant="h6"
                      gutterBottom
                    >
                      {personalInfo &&
                        `${personalInfo.firstName} ${personalInfo.lastName}`}
                    </Typography>
                    <Typography
                      className={classes.subtitle}
                      align={"left"}
                      variant="h6"
                    >
                      {personalInfo && personalInfo.specialty}
                    </Typography>
                    <Typography
                      className={classes.subtitle}
                      align={"left"}
                      variant="h6"
                    >
                      {personalInfo && personalInfo.country}
                    </Typography>
                    <Typography
                      className={classes.subtitle}
                      align={"left"}
                      variant="h6"
                    >
                      {personalInfo && personalInfo.phoneNumber}
                    </Typography>
                    <Typography
                      className={classes.subtitle}
                      align={"left"}
                      variant="h6"
                    >
                      11 AM : 8 PM
                    </Typography>
                  </div>{" "}
                  <div>
                    <Typography
                      className={classes.doctorHeading}
                      align={"left"}
                      variant="h6"
                    >
                      {patientInfo.fullName}
                    </Typography>
                    <Typography
                      className={classes.subtitle}
                      align={"left"}
                      variant="h6"
                    >
                      {patientInfo.phoneNumber}
                    </Typography>
                  </div>
                </div>
                <Divider />

                <div style={{ marginTop: "2em" }}>
                  <TextField
                    id="standard-textarea"
                    placeholder="Medications"
                    value={formData.medications}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        medications: e.target.value,
                      });
                    }}
                    multiline
                    fullWidth
                  />
                  <TextField
                    id="standard-textarea"
                    placeholder="Dosages"
                    value={formData.dosages}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        dosages: e.target.value,
                      });
                    }}
                    multiline
                    fullWidth
                  />
                </div>

                <div style={{ marginTop: "5em" }}>
                  <Typography
                    className={classes.subtitle}
                    align={"left"}
                    variant="h6"
                  >
                    Signature{" "}
                  </Typography>
                  <Typography
                    className={classes.signature}
                    align={"left"}
                    variant="h6"
                  >
                    {personalInfo &&
                      `${personalInfo.firstName} ${personalInfo.lastName}`}
                  </Typography>
                  <Divider style={{ width: "30%" }} />
                </div>
              </Paper>
            )}
          </Grid>
        </Grid>
      </form>{" "}
      <br></br>
      <br></br>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps, null)(Prescription);