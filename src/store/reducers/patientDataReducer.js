const initState = {};

const patientDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_GENERAL_INFORMATION_SUCCESS":
      console.log("create patient data success");
      return state;
    case "CREATE_GENERAL_INFORMATION_ERROR":
      console.log("create patient data error");
      return state;
    default:
      return state;
  }
};

export default patientDataReducer;
