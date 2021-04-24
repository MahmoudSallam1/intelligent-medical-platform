import React, { useState } from "react";

import FormStepper from "../../form-stepper/form-stepper";

import MedicalReports from "./medical-reports";
import Diagnosis from "./diagnosis";
import Confirm from "./confirm";

function PatientDataForm() {
  const steps = ["Medical Reports", "Diagnosis", "Confirm"];

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    diagnosis: "",
    symptoms: "",
    comments: "",
  });
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  switch (activeStep) {
    case 0:
      return (
        <>
          <FormStepper steps={steps} activeStep={activeStep} />
          <MedicalReports
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
          <FormStepper steps={steps} activeStep={activeStep} />
          <Diagnosis
            steps={steps}
            activeStep={activeStep}
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
          <FormStepper steps={steps} activeStep={activeStep} />
          <Confirm
            setActiveStep={setActiveStep}
            steps={steps}
            activeStep={activeStep}
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </>
      );

    default:
      return null;
  }
}

export default PatientDataForm;
