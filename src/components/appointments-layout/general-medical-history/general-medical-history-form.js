import React, { useState } from "react";

import FormStepper from "../../form-stepper/form-stepper";
import GeneralInformation from "./general-information";
import MedicalHistory from "./medical-history";
import FamilialDiseases from "./familial-diseases";
import SmokingAlcohol from "./smoking-alcohol";
import Confirm from "./confirm";

import { useParams } from "react-router-dom";

function GeneralMedicalHistoryForm() {
  const { id } = useParams();

  const steps = [
    "General information",
    "Medical history",
    "Familial diseases",
    "Smoking and Alcoholic drinks",
    "Confirm",
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
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  switch (activeStep) {
    case 0:
      return (
        <>
          <FormStepper steps={steps} activeStep={activeStep} />
          <GeneralInformation
            patientID={id}
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
          <MedicalHistory
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
          <FamilialDiseases
            steps={steps}
            activeStep={activeStep}
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
          <FormStepper steps={steps} activeStep={activeStep} />
          <SmokingAlcohol
            steps={steps}
            activeStep={activeStep}
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

export default GeneralMedicalHistoryForm;
