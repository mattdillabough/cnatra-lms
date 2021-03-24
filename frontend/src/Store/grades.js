//Grades Redux store
import axios from "axios";

const baseURL = "http://localhost:5000";
// const instance = axios.create({baseURL});

//ACTIONS
const GET_GRADESHEET = "GET_GRADESHEET";
const UPDATE_GRADESHEET = "UPDATE_GRADESHEET"; //Only includes event details
// const UPDATE_MANEUVER = "UPDATE_MANEUVER";

//ACTION CREATOR
const findGradeSheet = (data) => {
  return {
    type: GET_GRADESHEET,
    data,
  };
};

const modifyGradeSheet = (update) => {
  return {
    type: UPDATE_GRADESHEET,
    update,
  };
};

//THUNK CREATOR
export const getGradesheet = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${baseURL}/server/grade_sheets/${id}`);
      dispatch(findGradeSheet(data));
    } catch (error) {
      console.log("Error: there was a problem getting that gradesheet", error);
    }
  };
};

export const updateGradesheet = (data) => {
  return async (dispatch) => {
    try {
      //Assumes data will include an id corresponding to the gradesheet
      // await axios.put(`${baseUrl}/server/grade_sheets/${data.id}`, data)
      console.log("Data has been sent for update for gradesheetId: ", data.id);
      dispatch(modifyGradeSheet(data));
    } catch (error) {
      console.log("Error: there was a problem updating the gradesheet", error);
    }
  };
};

//REDUCER
export default function gradesReducer(state = {}, action) {
  switch (action.type) {
    case GET_GRADESHEET:
      return { ...state, details: action.data };
    case UPDATE_GRADESHEET:
      //will need to find all the fields for update; or make another GET req to replace old details
      return { ...state };
    default:
      return state;
  }
}
