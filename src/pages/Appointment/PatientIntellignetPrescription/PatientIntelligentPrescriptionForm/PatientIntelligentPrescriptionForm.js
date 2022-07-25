import React, { useState, useEffect } from "react";

import FormStepper from "../../../../components/Stepper/Stepper";
import { connect } from "react-redux";

import Prescription from "./Prescription";
import Confirm from "./Confirm";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
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

const db = firebase.firestore();

function PatientIntelligentPrescriptionForm({ auth }) {
  const classes = useStyles();
  const { id } = useParams();

  const steps = ["Prescription", "Confirm"];

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    prescription: "",
    dosages: "",
  });
  const [patientInfo, setPateintInfo] = useState({});

  const getPatientDetails = () => {
    db.collection(`doctors/${auth.uid}/patients`)
      .doc(id)
      .get()
      .then((docRef) => {
        setFormData(docRef.data().prescriptions);
        setPateintInfo(docRef.data().patientInformation);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPatientDetails();
  }, []);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  const renderForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Prescription
              patientInfo={patientInfo}
              steps={steps}
              prevStep={prevStep}
              activeStep={activeStep}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </>
        );

      case 1:
        return (
          <>
            <Confirm
              patientID={id}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
              formData={formData}
              setFormData={setFormData}
              prevStep={prevStep}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* <AppoitmentLinks id={id} /> */}
      <FormStepper steps={steps} activeStep={activeStep} />
      {renderForm(activeStep)}
      {activeStep !== steps.length - 1 && (
        <div className={classes.btnGroup}>
          <Button
            disabled={activeStep === 0}
            onClick={prevStep}
            className={classes.button}
          >
            Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={nextStep}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(PatientIntelligentPrescriptionForm);
