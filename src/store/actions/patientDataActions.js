export const createPatientData = (patientData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("doctors")
      .doc(authorId)
      .collection("patients")
      .doc("348mtrun4ZbgGnDpsboE") //patient ID
      .update(
        {
          displayName: profile.displayName,
          authorId: authorId,
          createdAt: new Date(),
          medicalData: {
            ...patientData,
            createdAt: new Date(),
          },
        },
      )
      .then(() => {
        dispatch({ type: "CREATE_PATIENT_DATA_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PATIENT_DATA_ERROR" }, err);
      });
  };
};
