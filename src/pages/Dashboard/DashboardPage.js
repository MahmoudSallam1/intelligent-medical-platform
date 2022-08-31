import React, { useEffect } from "react";

import Dashboard from "./components/Dashboard";

import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";

import { useTranslation } from "react-i18next";

function DashboardPage() {
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = "ltr";
    document.title = t("app_title");
  }, [t]);

  return (
    <DashboardLayout pageTitle={t("dashboard_title")}>
      <Dashboard />
    </DashboardLayout>
  );
}

export default DashboardPage;
