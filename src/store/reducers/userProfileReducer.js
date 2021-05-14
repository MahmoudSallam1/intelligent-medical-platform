const initState = {
  authError: null,
};

const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER_PROFILE_ERROR":
      return {
        ...state,
        authError: action.err.message,
      };
    case "UPDATE_USER_PROFILE_SUCCESS":
      console.log("profile updated");
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
