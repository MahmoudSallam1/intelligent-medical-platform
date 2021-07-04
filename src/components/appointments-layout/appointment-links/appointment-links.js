import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

function AppoitmentLinks({id}) {
  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={`${ROUTES.MEDICAL_HISTORY}/${id}`}
      >
        Patient Information
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={`${ROUTES.PATIENT_DATA}/${id}`}
      >
        Medical Data
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={`${ROUTES.PRESCRIPTION}/${id}`}
      >
        Intelligent Prescription
      </Link>
    </div>
  );
}

export default AppoitmentLinks;
