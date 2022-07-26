const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login failed");
      return {
        ...state,
        authError: "Invalid email or password",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("sign out success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("sign up sucess");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("sign up error===",action.err.message);
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
