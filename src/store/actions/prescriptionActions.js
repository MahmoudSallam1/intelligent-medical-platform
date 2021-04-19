export const createPrescription = (prescription) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("prescription")
      .add({
        ...prescription,
        displayName: profile.displayName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PRESCRIPTION_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PRESCRIPTION_ERROR" }, err);
      });
  };
};
