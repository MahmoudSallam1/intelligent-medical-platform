export const createPatientGeneralInformation = (generalInformation) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("patient-general-medical-history")
      .add({
        ...generalInformation,
        displayName: profile.displayName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_GENERAL_INFORMATION_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_GENERAL_INFORMATION_ERROR" }, err);
      });
  };
};
