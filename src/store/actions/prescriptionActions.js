export const createPrescription = (prescription) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("doctors")
      .doc(authorId)
      .collection("patients")
      .doc("GEgYjmcj7Rr2JHYFVVQG") //patient ID
      .update({
        displayName: profile.displayName,
        authorId: authorId,
        createdAt: new Date(),
        prescription: {
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
