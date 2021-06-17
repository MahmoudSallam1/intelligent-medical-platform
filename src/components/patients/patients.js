import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import firebase from "../../firebase/firebase";

import PaperWrapper from "../paper-wrapper/paper-wrapper";

import CircularProgress from "@material-ui/core/CircularProgress";

import { DataGrid } from "@material-ui/data-grid";

const db = firebase.firestore();

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "fullName", headerName: "Full name", width: 150 },
  {
    field: "phoneNumber",
    headerName: "Phone number",
    width: 170,
    type: "number",
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
];

function Patients(props) {
  const { auth } = props;
  const [patients, setPatients] = useState([]);

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
      {" "}
      {patients.length ? (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      ) : (
        <CircularProgress />
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
