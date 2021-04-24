import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PauseIcon from "@material-ui/icons/Pause";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";
import KeyboardIcon from "@material-ui/icons/Keyboard";
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

function MedicalReports({
  formData,
  setFormData,
  nextStep,
  prevStep,
  activeStep,
  steps,
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState();
  const [isRecord, setIsRecord] = useState(false);

  //Speech Recognition
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSave(files) {
    setFiles(files);
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  function handleNext(e) {
    e.preventDefault();
    nextStep();
  }

  function handleBack(e) {
    e.preventDefault();
    prevStep();
  }
  // console.log(document.querySelectorAll(" p * div "));

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

              <div>
                {isRecord ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                      setIsRecord(!isRecord);
                      SpeechRecognition.stopListening();
                    }}
                    endIcon={<PauseIcon />}
                  >
                    Pause
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setIsRecord(!isRecord);
                      SpeechRecognition.startListening({
                        continuous: true,
                        // language: "ar-EG",
                      });
                    }}
                    className={classes.button}
                    endIcon={<MicIcon />}
                  >
                    Record
                  </Button>
                )}
              </div>
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
            />
          </Grid>
        </Grid>

        <br></br>
        <Typography
          className={classes.gray}
          align={"left"}
          variant="h6"
          gutterBottom
        >
          Upload Reports / Radiology{" "}
        </Typography>
        <Grid container spacing={2}>
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
        </Grid>
      </form>{" "}
      <br></br>
      <br></br>
      <div className={classes.btnGroup}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </Container>
  );
}

export default MedicalReports;
