import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PauseIcon from "@material-ui/icons/Pause";
import Button from "@material-ui/core/Button";

import { DropzoneDialog } from "material-ui-dropzone";
import MicIcon from "@material-ui/icons/Mic";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const useStyles = makeStyles((theme) => ({
  gray: {
    color: "#616161",
    fontWeight: "400",
    fontSize: "1rem",
  },
  ourFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1em",
  },
  button: {
    marginRight: theme.spacing(1),
    padding: "0.5em 1.5em",
  },
  btnGroup: {
    textAlign: "center",
  },
}));

function MedicalReports({ formData, setFormData }) {
  const classes = useStyles();

  const [isRecord, setIsRecord] = useState(false);
  // const [initSymptoms, setInitSymptoms] = useState(symptoms);

  //Speech Recognition
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return null;
  // }

  // useEffect(() => {
  //   if (!listening) {
  //     setInitSymptoms(symptoms.concat(transcript));
  //     resetTranscript();
  //   } else {
  //     setSymptoms(initSymptoms.concat(transcript));
  //   }
  // }, [listening, transcript]);

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


  return (
    <Container>
      <form
      //   noValidate
      >
        <Grid spacing={3} container>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.ourFlex}>
              <Typography
                className={classes.gray}
                align={"left"}
                variant="h6"
                gutterBottom
              >
                Symptoms{" "}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={isRecord ? handleStop : handleRecord}
                endIcon={isRecord ? <PauseIcon /> : <MicIcon />}
              >
                {isRecord ? "Pause" : "Record"}
              </Button>
            </div>

            <TextField
              id="symptoms"
              label="Symptoms"
              value={formData.symptoms}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  symptoms: e.target.value,
                });
              }}
              multiline
              fullWidth
              rowsMax={4}
              variant="outlined"
              disabled={isRecord}
            />
          </Grid>
        </Grid>

        <br></br>
        {/* <Typography
          className={classes.gray}
          align={"left"}
          variant="h6"
          gutterBottom
        >
          Upload Reports / Radiology{" "}
        </Typography> */}
        {/* <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <div style={{ textAlign: "left" }}>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Upload Reports
              </Button>
              <DropzoneDialog
                open={open}
                onSave={(files) => handleSave(files)}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div style={{ textAlign: "left" }}>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Upload Radiology
              </Button>
              <DropzoneDialog
                open={open}
                onSave={(files) => handleSave(files)}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
              />
            </div>
          </Grid>
        </Grid> */}
      </form>{" "}
      <br></br>
      <br></br>
    </Container>
  );
}

export default MedicalReports;
