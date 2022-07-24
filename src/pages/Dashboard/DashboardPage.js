import React from "react";

import Dashboard from "./components/Dashboard";

import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";

function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <Dashboard />
    </DashboardLayout>
  );
}

export default DashboardPage;
