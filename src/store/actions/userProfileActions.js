export const updateUserProfile = (userProfileData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("doctors")
      .doc(authorId)
      .update({
        ...userProfileData,
        displayName:userProfileData.displayName,
        updatedAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "UPDATE_USER_PROFILE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_USER_PROFILE_ERROR" }, err);
      });
  };
};
