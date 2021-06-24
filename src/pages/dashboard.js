import React from "react";

import DashboardLayout from "../components/dashboard-layout/dashboard-layout";

import Dashboard from "../components/dashboard/dashboard";

function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <Dashboard />
    </DashboardLayout>
  );
}

export default DashboardPage;
