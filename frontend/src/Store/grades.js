//Grades Redux store
import axios from "axios";

const baseURL = "http://localhost:5000";
// const instance = axios.create({baseURL});

//ACTIONS
const GET_GRADESHEET = "GET_GRADESHEET";
const UPDATE_GRADESHEET = "UPDATE_GRADESHEET"; //Only includes event details
const UPDATE_MANEUVERS = "UPDATE_MANEUVERS";

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

const modifyManeuvers = (update) => {
  return {
    type: UPDATE_MANEUVERS,
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
      //Get updated data & dispatch with updated data from GET
      //await axios.get(`${baseURL}/server/grade_sheets/${data.id}`)
      dispatch(modifyGradeSheet(data));
    } catch (error) {
      console.log("Error: there was a problem updating the gradesheet", error);
    }
  };
};

export const updateManeuvers = (edits, id) => {
  return async (dispatch) => {
    try {
      for (let key in edits) {
        await axios.put(
          `${baseURL}/server/grade_sheet_maneuvers/${edits[key].id}`,
          edits[key].data
        );
        console.log("id:", edits[key].id, "data:", edits[key].data);
      }
      console.log("Data has been sent to update maneuvers");
      //Change later: Should send updated info, properly formatted
      const { data } = await axios.get(`${baseURL}/server/grade_sheets/${id}`);
      dispatch(modifyManeuvers(data));
    } catch (error) {
      console.log("Error: there was a problem updating the maneuvers");
    }
  };
};

//REDUCER
export default function gradesReducer(state = {}, action) {
  switch (action.type) {
    case GET_GRADESHEET:
      return { ...state, details: action.data };
    case UPDATE_GRADESHEET:
      //Will need to find all the fields for update; or make another GET req to replace old details
      return { ...state };
    case UPDATE_MANEUVERS:
      //Likewise for maneuvers
      return { ...state, details: action.update };
    default:
      return state;
  }
}
