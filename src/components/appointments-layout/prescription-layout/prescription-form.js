import React, { useState } from "react";

import FormStepper from "../../form-stepper/form-stepper";

import Prescription from "./prescription";
import Confirm from "./confirm";

function PrescriptionForm() {
  const steps = ["Prescription", "Confirm"];

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    prescription: "",
  });
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  switch (activeStep) {
    case 0:
      return (
        <>
          <FormStepper steps={steps} activeStep={activeStep} />
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
          <FormStepper steps={steps} activeStep={activeStep} />
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
}

export default PrescriptionForm;
