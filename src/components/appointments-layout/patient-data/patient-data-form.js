import React, { useState } from "react";

import FormStepper from "../../form-stepper/form-stepper";
import Button from "@material-ui/core/Button";

import MedicalReports from "./medical-reports";
import Diagnosis from "./diagnosis";
import Confirm from "./confirm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
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

  const [tags, setTags] = useState([]);


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
        return <MedicalReports formData={formData} setFormData={setFormData} />;
      case 1:
        return <Diagnosis tags={tags} setTags={setTags} formData={formData} setFormData={setFormData} />;
      case 2:
        return (
          <Confirm
            setActiveStep={setActiveStep}
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            tags={tags}
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

export default PatientDataForm;
