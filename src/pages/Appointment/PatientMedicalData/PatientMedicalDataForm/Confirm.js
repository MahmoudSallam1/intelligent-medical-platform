import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

import { CircularProgress } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { createPatientData } from "../../../../store/actions/patientDataActions";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";

import firebase from "../../../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    padding: "0.5em 1.5em",
  },
  btnGroup: {
    textAlign: "center",
  },
}));

function Confirm({
  createPatientData,
  patientID,
  formData,
  setFormData,
  prevStep,
  activeStep,
  setActiveStep,
  tags,
  setTags,
}) {
  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const newTags = tags.map((tag) => tag.name);

  const handleCloseDialog = () => {
    setOpen(false);
    setActiveStep(0);
  };

  async function handleConfirm(e) {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("submitting to DB...");

    createPatientData(
      {
        ...formData,
        diagnosis: newTags.join(" ,") + " ," + formData.diagnosis,
      },
      patientID
    );

    setOpen(true);
    setIsSubmitting(false);
    setTags([]);
    // setFormData({});
  }

  console.log(newTags);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText
                  primary="Diagnosis"
                  secondary={newTags.join(" ,") + " ," + formData.diagnosis}
                />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText
                  primary="Symptoms"
                  secondary={formData.symptoms}
                />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText
                  primary="Comments"
                  secondary={formData.comments}
                />
              </ListItem>
            </List>
            <br />

            <div className={classes.btnGroup}>
              <Button
                disabled={activeStep === 0}
                onClick={prevStep}
                className={classes.button}
              >
                {t("back_btn")}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleConfirm}
                className={classes.button}
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : t("submit_btn")}
              </Button>
            </div>

            <div>
              <Dialog
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Thank you!"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Patient Data has been added to patient's medical record.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="primary" autoFocus>
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPatientData: (patientData, patientID) =>
      dispatch(createPatientData(patientData, patientID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
