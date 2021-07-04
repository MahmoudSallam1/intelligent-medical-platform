export const createPrescription = (prescription, patientID) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    if (patientID) {
      firestore
        .collection("doctors")
        .doc(authorId)
        .collection("patients")
        .doc(patientID) //patient ID
        .update({
          displayName: profile.displayName,
          authorId: authorId,
          createdAt: new Date(),
          prescriptions: {
            ...prescription,
            createdAt: new Date(),
          },
        })
        .then(() => {
          dispatch({ type: "CREATE_PRESCRIPTION_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_PRESCRIPTION_ERROR" }, err);
        });
    } else
      firestore
        .collection("doctors")
        .doc(authorId)
        .collection("patients")
        .add({
          displayName: profile.displayName,
          authorId: authorId,
          createdAt: new Date(),
          prescriptions: {
            ...prescription,
            createdAt: new Date(),
          },
        })
        .then(() => {
          dispatch({ type: "CREATE_PRESCRIPTION_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_PRESCRIPTION_ERROR" }, err);
        });
  };
};
