export const createPatientData = (patientData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("doctors")
      .doc(authorId)
      .update({
        displayName: profile.displayName,
        authorId: authorId,
        createdAt: new Date(),
        patientData: {
          ...patientData,
          createdAt: new Date(),
        },
      })
      .then(() => {
        dispatch({ type: "CREATE_PATIENT_DATA_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PATIENT_DATA_ERROR" }, err);
      });
  };
};
