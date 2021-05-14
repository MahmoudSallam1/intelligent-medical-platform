import React, { useState } from "react";

import FormStepper from "../../form-stepper/form-stepper";
import Button from "@material-ui/core/Button";

import MedicalReports from "./medical-reports";
import Diagnosis from "./diagnosis";
import Confirm from "./confirm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    padding: "0.5em 1.5em",
  },
  btnGroup: {
    textAlign: "center",
  },
}));

function PatientDataForm() {
  const classes = useStyles();

  const steps = ["Medical Reports", "Diagnosis", "Confirm"];

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    diagnosis: "",
    symptoms: "",
    comments: "",
  });

  const nextStep = (e) => {
    e.preventDefault();
    setActiveStep((prev) => prev + 1);
  };
  const prevStep = (e) => {
    e.preventDefault();
    setActiveStep((prev) => prev - 1);
  };

  const setSymptoms = (value) => {
    setFormData({ ...formData, symptoms: value });
  };

  const renderForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <MedicalReports
            setSymptoms={setSymptoms}
            steps={steps}
            symptoms={formData.symptoms}
            prevStep={prevStep}
            activeStep={activeStep}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <Diagnosis
            steps={steps}
            activeStep={activeStep}
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <Confirm
            setActiveStep={setActiveStep}
            steps={steps}
            activeStep={activeStep}
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
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

export default PatientDataForm;
