import React from "react";

import DashboardLayout from "../components/dashboard-layout/dashboard-layout";
import PaperWrapper from "../components/paper-wrapper/paper-wrapper";

function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <PaperWrapper>this is dashboard</PaperWrapper>{" "}
    </DashboardLayout>
  );
}

export default DashboardPage;
