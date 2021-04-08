//Students Redux store
import axios from "axios";

const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL });

//ACTIONS
const GET_STUDENT = "GET_STUDENT";

//ACTION CREATORS
const findStudent = (info) => {
  return {
    type: GET_STUDENT,
    info,
  };
};

//THUNK (CREATOR)
export const fetchStudent = (userName) => {
  return async (dispatch) => {
    try {
      const { data } = await instance.get(`/server/students/${userName}`);
      dispatch(findStudent(data.student));
    } catch (error) {
      console.log("There was a problem fetching student info: ", error);
    }
  };
};

//REDUCER
export default function studentsReducer(state = {}, action) {
  switch (action.type) {
    case GET_STUDENT:
      return { ...state, student: action.info };
    default:
      return state;
  }
}
