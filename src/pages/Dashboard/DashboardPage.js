import React from "react";

import Dashboard from "./components/dashboard";

import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";

function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <Dashboard />
    </DashboardLayout>
  );
}

export default DashboardPage;
