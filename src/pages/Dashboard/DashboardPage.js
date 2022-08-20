import React from "react";

import Dashboard from "./components/Dashboard";

import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";

import { useTranslation } from "react-i18next";

function DashboardPage() {
  const { t } = useTranslation();

  return (
    <DashboardLayout pageTitle={t("dashboard_title")}>
      <Dashboard />
    </DashboardLayout>
  );
}

export default DashboardPage;
