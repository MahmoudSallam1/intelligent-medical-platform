const initState = {};

const patientGeneralInformationReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_GENERAL_INFORMATION_SUCCESS":
      console.log("create general infomation success");
      return state;
    case "CREATE_GENERAL_INFORMATION_ERROR":
      console.log("create general infomation error");
      return state;
    default:
      return state;
  }
};

export default patientGeneralInformationReducer;
