//Grades Redux store
import axios from "axios";

const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL });

//ACTIONS
const GET_GRADESHEET = "GET_GRADESHEET";
const UPDATE_GRADESHEET = "UPDATE_GRADESHEET"; //Only includes event details
const UPDATE_MANEUVERS = "UPDATE_MANEUVERS";

//ACTION CREATOR
const findGradeSheet = (details, maneuvers) => {
  return {
    type: GET_GRADESHEET,
    details,
    maneuvers,
  };
};

const modifyGradeSheet = (evt_details, id) => {
  return {
    type: UPDATE_GRADESHEET,
    evt_details,
    id,
  };
};

const modifyManeuvers = (maneuvers) => {
  return {
    type: UPDATE_MANEUVERS,
    maneuvers,
  };
};

//THUNK CREATOR
export const getGradesheet = (id) => {
  return async (dispatch) => {
    try {
      const details = await instance.get(`/server/grade_sheets/${id}`);
      const maneuvers = await instance.get(
        `/server/grade_sheets/${id}/maneuvers`
      );
      dispatch(findGradeSheet(details.data, maneuvers.data));
    } catch (error) {
      console.log("Error: there was a problem getting that gradesheet", error);
    }
  };
};

export const updateGradesheet = (data, id) => {
  return async (dispatch) => {
    try {
      //Assumes data will include an id corresponding to the gradesheet
      await instance.put(`/server/grade_sheets/${id}`, data);
      //Get updated data & dispatch with updated data from GET
      const update = await instance.get(`/server/grade_sheets/${id}`);

      console.log("Data has been sent for update for gradesheetId: ", id, data);
      console.log("update from db", update.data);
      // dispatch(modifyGradeSheet(data, id));
    } catch (error) {
      console.log("Error: there was a problem updating the gradesheet", error);
    }
  };
};

export const updateManeuvers = (edits, id) => {
  return async (dispatch) => {
    try {
      for (let key in edits) {
        await instance.put(
          `/server/grade_sheet_maneuvers/${edits[key].id}`,
          edits[key].data
        );
        console.log("id:", edits[key].id, "data:", edits[key].data);
      }

      const { data } = await instance.get(
        `/server/grade_sheets/${id}/maneuvers`
      );
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
      return { ...state, details: action.details, maneuvers: action.maneuvers };
    case UPDATE_GRADESHEET:
      return { ...state, details: action.evt_details };
    case UPDATE_MANEUVERS:
      return { ...state, maneuvers: action.maneuvers };
    default:
      return state;
  }
}
