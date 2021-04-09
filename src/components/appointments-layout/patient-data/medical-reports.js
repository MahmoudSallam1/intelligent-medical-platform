import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PauseIcon from "@material-ui/icons/Pause";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

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
  breath: {
    marginTop: "1em",
    textAlign: "left",
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
    alignItems: "center",
    marginBottom: "1em",
  },
}));

function MedicalReports() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState();
  const [isRecord, setIsRecord] = React.useState(false);

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(document.querySelectorAll(" p * div "));
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

            <TextField
              id="outlined-multiline-flexible"
              label="Symptoms"
              multiline
              fullWidth
              rowsMax={4}
              value={transcript}
              onChange={handleChange}
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
        <Grid container spacing={3}>
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
    </Container>
  );
}

export default MedicalReports;
