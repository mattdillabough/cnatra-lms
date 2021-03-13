//Grades Redux store
import axios from "axios";
const baseUrl = "http://localhost:5000";

//ACTIONS
const GET_GRADESHEET = "GET_GRADESHEET";

//ACTION CREATOR
const findGradeSheet = (data) => {
  return {
    type: GET_GRADESHEET,
    data,
  };
};

//THUNK CREATOR
export const getGradesheet = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${baseUrl}/server/grade_sheets/${id}`);
      dispatch(findGradeSheet(data));
    } catch (error) {
      console.log("Error: there was a problem getting that gradesheet", error);
    }
  };
};

//REDUCER
export default function gradesReducer(state = {}, action) {
  switch (action.type) {
    case GET_GRADESHEET:
      return { ...state, details: action.data };
    default:
      return state;
  }
}
