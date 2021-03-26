import React from "react";

import AppointmentLayout from "../components/appointments-layout/appointment-layout";
import PatientData from "../components/appointments-layout/patient-data/patient-data";

function PatientDataPage() {
  return (
    <AppointmentLayout>
      <PatientData />
    </AppointmentLayout>
  );
}

export default PatientDataPage;
