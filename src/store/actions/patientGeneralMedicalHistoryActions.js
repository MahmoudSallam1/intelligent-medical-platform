export const createPatientGeneralMedicalHistory = (
  generalMedicalHistory,
  patientID
) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    if (patientID) {
      firestore
        .collection("doctors")
        .doc(authorId)
        .collection("patients")
        .doc(patientID)
        .update({
          displayName: profile.displayName,
          // authorId: authorId,
          // createdAt: new Date(),
          patientInformation: {
            ...generalMedicalHistory,
            createdAt: new Date(),
          },
        });
    } else
      firestore
        .collection("doctors")
        .doc(authorId)
        .collection("patients")
        .add({
          displayName: profile.displayName,
          // authorId: authorId,
          // createdAt: new Date(),
          patientInformation: {
            ...generalMedicalHistory,
            createdAt: new Date(),
          },
        })
        .then(() => {
          dispatch({ type: "CREATE_GENERAL_MEDCIAL_HISTORY_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_GENERAL_MEDCIAL_HISTORY_ERROR" }, err);
        });
  };
};
