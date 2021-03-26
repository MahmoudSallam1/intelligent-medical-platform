import React from "react";

import AppointmentLayout from "../components/appointments-layout/appointment-layout";
import GeneralMedicalHistory from "../components/appointments-layout/general-medical-history/general-medical-history";

function GeneralMedicalHistoryPage() {
  return (
    <AppointmentLayout>
      <GeneralMedicalHistory />
    </AppointmentLayout>
  );
}

export default GeneralMedicalHistoryPage;
