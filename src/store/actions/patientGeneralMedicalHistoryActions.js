export const createPatientGeneralMedicalHistory = (generalMedicalHistory) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("patient-general-medical-history")
      .add({
        ...generalMedicalHistory,
        displayName: profile.displayName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_GENERAL_MEDCIAL_HISTORY_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_GENERAL_MEDCIAL_HISTORY_ERROR" }, err);
      });
  };
};
