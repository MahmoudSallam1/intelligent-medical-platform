import React, { useState, useEffect } from "react";

import Stepper from "../../../../components/Stepper/Stepper";
import Button from "@material-ui/core/Button";

import MedicalReports from "./MedicalReports";
import Diagnosis from "./Diagnosis";
import Confirm from "./Confirm";
import { makeStyles } from "@material-ui/core/styles";

import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import AppointmentNavigation from "../../components/AppointmentNavigation";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginRight: theme.spacing(1),
    padding: "0.5em 1.5em",
  },
  btnGroup: {
    textAlign: "center",
  },
}));
const db = firebase.firestore();

function PatientMedicalDataForm({ auth }) {
  const { id } = useParams();

  const { t } = useTranslation();

  const classes = useStyles();
  const { transcript, resetTranscript } = useSpeechRecognition();

  const steps = [t("medical_reports"), t("diagonsis"), t("confirm")];

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    diagnosis: "",
    symptoms: "",
    comments: "",
  });

  const [tags, setTags] = useState([]);

  const getPatientDetails = () => {
    db.collection(`doctors/${auth.uid}/patients`)
      .doc(id)
      .get()
      .then((docRef) => {
        setFormData(docRef.data().medicalData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPatientDetails();
  }, []);

  const nextStep = (e) => {
    e.preventDefault();
    setActiveStep((prev) => prev + 1);
  };
  const prevStep = (e) => {
    e.preventDefault();
    setActiveStep((prev) => prev - 1);
  };

  const renderForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <MedicalReports
            transcript={transcript}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <Diagnosis
            tags={tags}
            setTags={setTags}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <Confirm
            patientID={id}
            setActiveStep={setActiveStep}
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            tags={tags}
            setTags={setTags}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Stepper steps={steps} activeStep={activeStep} />
      {renderForm(activeStep)}
      {activeStep !== steps.length - 1 && (
        <div className={classes.btnGroup}>
          <Button
            disabled={activeStep === 0}
            onClick={prevStep}
            className={classes.btn}
          >
            Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={nextStep}
            className={classes.btn}
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

export default connect(mapStateToProps, null)(PatientMedicalDataForm);
