import React, { useState } from "react";

import FormStepper from "../../form-stepper/form-stepper";

import Prescription from "./prescription";
import Confirm from "./confirm";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    padding: "0.5em 1.5em",
  },
  btnGroup: {
    textAlign: "center",
  },
}));

function PrescriptionForm() {
  const classes = useStyles();
  const steps = ["Prescription", "Confirm"];

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    prescription: "",
  });
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  const renderForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Prescription
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

export default PrescriptionForm;
