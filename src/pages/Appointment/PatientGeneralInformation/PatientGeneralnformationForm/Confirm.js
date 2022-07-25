import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";
import * as ROUTES from "../../../../constants/routes";

import { connect } from "react-redux";
import { createPatientGeneralMedicalHistory } from "../../../../store/actions/patientGeneralMedicalHistoryActions";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

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
  createPatientGeneralMedicalHistory,
  formData,
  patientID,
  setFormData,
  nextStep,
  prevStep,
  activeStep,
  steps,
  setActiveStep,
}) {
  const classes = useStyles();
  let history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [open, setOpen] = useState(false);

  const handleCloseDialog = () => {
    setOpen(false);
    setActiveStep(0);
  };

  function handleBack(e) {
    e.preventDefault();
    prevStep();
  }

  async function handleConfirm(e) {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("submitting to DB...");
    // await sleep(2000);
    createPatientGeneralMedicalHistory(formData, patientID);
    setOpen(true);
    setIsSubmitting(false);

  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText
                  primary="Full Name"
                  secondary={formData.fullName}
                />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText primary="Address" secondary={formData.address} />
              </ListItem>
              <Divider />

              {/* <ListItem>
                <ListItemText
                  primary="Date"
                  secondary={formData.selectedDate}
                />
              </ListItem> */}
              <ListItem>
                <ListItemText primary="Gender" secondary={formData.gender} />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText
                  primary="Emergency Full Name"
                  secondary={formData.emergencyFullName}
                />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText
                  primary="Emergency Phone Number"
                  secondary={formData.emergencyPhoneNumber}
                />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText
                  primary="Relation"
                  secondary={formData.relation}
                />
              </ListItem>
            </List>
            <br />

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
                onClick={handleConfirm}
                className={classes.button}
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : "Submit"}
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
                    Patient general medical history has been added to patient's
                    medical record.
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
    createPatientGeneralMedicalHistory: (generalMedicalHistory, patientID) =>
      dispatch(
        createPatientGeneralMedicalHistory(generalMedicalHistory, patientID)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
