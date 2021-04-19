const initState = {};

const prescriptionReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PRESCRIPTION_SUCCESS":
      console.log("create prescription success");
      return state;
    case "CREATE_PRESCRIPTION_ERROR":
      console.log("create prescription error");
      return state;
    default:
      return state;
  }
};

export default prescriptionReducer;
