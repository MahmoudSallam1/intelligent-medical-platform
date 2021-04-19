const initState = {};

const patientGeneralMedicalHistoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_GENERAL_MEDCIAL_HISTORY_SUCCESS":
      console.log("create general medical history success");
      return state;
    case "CREATE_GENERAL_MEDCIAL_HISTORY_ERROR":
      console.log("create general medical history error");
      return state;
    default:
      return state;
  }
};

export default patientGeneralMedicalHistoryReducer;
