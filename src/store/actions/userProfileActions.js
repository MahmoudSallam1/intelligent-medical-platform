export const updateUserProfile = (personaInfo, clinicInfo) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("doctors")
      .doc(authorId)
      .update({
        displayName: personaInfo.displayName,
        personalInfo: { ...personaInfo, updatedAt: new Date() },
        clinicInfo: { ...clinicInfo },
      })
      .then(() => {
        dispatch({ type: "UPDATE_USER_PROFILE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_USER_PROFILE_ERROR" }, err);
      });
  };
};
