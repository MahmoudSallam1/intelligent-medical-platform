import React, { useState, useEffect } from "react";

import FormStepper from "../../../../components/Stepper/Stepper";
import GeneralInformation from "./GeneralInformation";
import MedicalHistory from "./MedicalHistory";
import FamilialDiseases from "./FamilialDiseases";
import SmokingAlcohol from "./SmokingAndAlcohol";
import Confirm from "./Confirm";
import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useParams } from "react-router-dom";
import AppointmentNavigation from "../../components/AppointmentNavigation";

import { useTranslation } from "react-i18next";
const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  btn: {
    marginRight: theme.spacing(1),
    padding: "0.5em 1.5em",
  },
  btnGroup: {
    textAlign: "center",
  },
}));

function GeneralMedicalHistoryForm({ auth }) {
  const { id } = useParams();
  const classes = useStyles();
  const { t } = useTranslation();


  const steps = [
    t("general_information"),
    t("medical_history"),
    t("familial_diseases"),
    t("smoking_and_alcoholic_drinks"),
    t("confirm"),
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    selectedDate: null,
    gender: "",
    emergencyFullName: "",
    emergencyPhoneNumber: "",
    relation: "",
  });

  const getPatientDetails = () => {
    db.collection(`doctors/${auth.uid}/patients`)
      .doc(id)
      .get()
      .then((docRef) => {
        setFormData(docRef.data().patientInformation);
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
            <GeneralInformation
              patientID={id}
              prevStep={prevStep}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </>
        );
      case 1:
        return (
          <>
            <MedicalHistory
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </>
        );

      case 2:
        return (
          <>
            <FamilialDiseases
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </>
        );
      case 3:
        return (
          <>
            <SmokingAlcohol
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </>
        );

      case 4:
        return (
          <>
            <Confirm
              setActiveStep={setActiveStep}
              steps={steps}
              activeStep={activeStep}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              patientID={id}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {" "}
      <FormStepper steps={steps} activeStep={activeStep} />
      {renderForm(activeStep)}
      {activeStep !== steps.length - 1 && (
        <div className={classes.btnGroup}>
          <Button
            disabled={activeStep === 0}
            onClick={prevStep}
            className={classes.btn}
          >
            {t("back_btn")}
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={nextStep}
            className={classes.btn}
          >
            {activeStep === steps.length - 1 ? t("finish_btn") : t("next_btn")}
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

export default connect(mapStateToProps, null)(GeneralMedicalHistoryForm);
