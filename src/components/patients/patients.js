import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import firebase from "../../firebase/firebase";

const db = firebase.firestore();

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

  console.log(patients);

  return <div>{patients.length ? "Done" : "loading..."}</div>;
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Patients);
