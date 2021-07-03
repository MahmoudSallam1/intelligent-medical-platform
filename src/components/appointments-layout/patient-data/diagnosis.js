import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PauseIcon from "@material-ui/icons/Pause";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Container from "@material-ui/core/Container";


import MultipleTags from "../../autocomplete-textfield/multiple-autocomplete";
import diagnoses from "../../../apis/diagnoses.json";

import { makeStyles } from "@material-ui/core/styles";

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

function Diagnosis({ formData, setFormData, tags, setTags }) {
  const classes = useStyles();
  const [isRecord, setIsRecord] = useState(false);

  //Speech Recognition

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


  return (
    <Container>
      <form>
        <Grid spacing={3} container>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.ourFlex}>
              <Typography
                className={classes.gray}
                align={"left"}
                variant="h6"
                gutterBottom
              >
                Diagnosis{" "}
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

            <MultipleTags
              setFormData={setFormData}
              formData={formData}
              placeholder="Select diagnoses"
              tags={tags}
              setTags={setTags}
              tagsArray={diagnoses}
            />

            <br></br>

            <TextField
              id="outlined-multiline-flexible"
              placeholder="Add more diagnoses"
              multiline
              fullWidth
              rowsMax={4}
              value={formData.diagnosis}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  diagnosis: e.target.value ,
                });
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <br></br>

        <TextField
          id="comments"
          value={formData.comments}
          onChange={(e) => {
            setFormData({
              ...formData,
              comments: e.target.value,
            });
          }}
          placeholder="Comments"
          multiline
          fullWidth
        />
      </form>{" "}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Diagnosis;
