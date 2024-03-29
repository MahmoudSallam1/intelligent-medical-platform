import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import firebase from "../../../firebase/firebase";

import PaperWrapper from "../../../components/PaperWrapper/PaperWrapper";

import { DataGrid } from "@material-ui/data-grid";

import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";

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
  const [rows, setRows] = useState([]);
  const [patients, setPatients] = useState([]);

  const [loading, setIsLoading] = useState(true);
  const [searched, setSearched] = useState("");

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
        const data = fetchPatients.map((doc) => {
          return { ...doc.patientInformation, id: doc.id };
        });
        setRows(data);
        setPatients(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPatientsList();
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredRows = patients.filter((row) => {
      return row.fullName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <PaperWrapper>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />

      <br></br>
      {rows.length === 0 && !loading ? (
        "No Data Found"
      ) : (
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
