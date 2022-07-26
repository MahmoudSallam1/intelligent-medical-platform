import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import firebase from "../../../firebase/firebase";

import PaperWrapper from "../../../components/PaperWrapper/PaperWrapper";

import { DataGrid } from "@material-ui/data-grid";

import { Link } from "react-router-dom";

const db = firebase.firestore();

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
    renderCell: (params) => (
      <Link to={`/dashboard/patients/${params.value}`}>{params.value}</Link>
    ),
  },

  { field: "fullName", headerName: "Full name", width: 150 },
  {
    field: "phoneNumber",
    headerName: "Phone number",
    width: 140,
    type: "number",
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
  },
  {
    field: "emergencyFullName",
    headerName: "Emergency FullName",
    width: 150,
  },
  {
    field: "emergencyPhoneNumber",
    headerName: "Emergency Phone Number",
    width: 150,
  },
  {
    field: "relation",
    headerName: "Relation",
    width: 150,
  },
];

function Patients(props) {
  const { auth } = props;
  const [patients, setPatients] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const getPatientsList = () => {
    db.collection(`doctors/${auth.uid}/patients`)
      .get()
      .then((res) => {
        const fetchPatients = [];
        res.forEach((document) => {
          const fetchedPatient = {
            id: document.id,
            ...document.data(),
          };
          fetchPatients.push(fetchedPatient);
        });
        setIsLoading(false);
        setPatients(fetchPatients);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPatientsList();
  }, []);

  const rows = patients.map((doc) => {
    return { ...doc.patientInformation, id: doc.id };
  });

  console.log(rows);

  return (
    <PaperWrapper>
      {(patients.length == 0) && (!loading) ? ("No Data Found") :
        (
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              loading={loading}
            // checkboxSelection
            />
          </div>
        )}
    </PaperWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Patients);
