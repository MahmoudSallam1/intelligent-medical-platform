import React from "react";
import AppointmentLayout from "../components/appointments-layout/appointment-layout";
import PrescriptionLayout from "../components/appointments-layout/prescription-layout/prescription-layout";

function PrescriptionPage() {
  return <AppointmentLayout><PrescriptionLayout/></AppointmentLayout>;
}

export default PrescriptionPage;
