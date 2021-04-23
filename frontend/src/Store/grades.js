//Grades Redux Reducer
import axios from "axios";

const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL });

//ACTIONS
const SET_GRADESHEET_ID = "SET_GRADESHEET_ID";
const GET_GRADESHEET = "GET_GRADESHEET";
const UPDATE_GRADESHEET = "UPDATE_GRADESHEET"; //Only includes event details
const UPDATE_MANEUVERS = "UPDATE_MANEUVERS";

//ACTION CREATORS
export const setGradeSheetId = (id) => {
  return {
    type: SET_GRADESHEET_ID,
    id,
  };
};

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

//THUNK CREATORS
export const getGradesheet = (id, username, evt_code) => {
  return async (dispatch) => {
    try {
      const details = await instance.get(
        `/server/students/${username}/grade_sheets/${evt_code}`
      );
      const maneuvers = await instance.get(
        `/server/grade_sheets/${id}/maneuvers`
      );
      dispatch(findGradeSheet(details.data, maneuvers.data));
    } catch (error) {
      console.log("There was a problem getting that gradesheet \n", error);
    }
  };
};

export const updateGradesheet = (data, id, username, evt_code) => {
  return async (dispatch) => {
    try {
      //Send updates to database
      await instance.put(`/server/grade_sheets/${id}`, data);
      //Get updated data & dispatch with updated data from GET
      const update = await instance.get(
        `/server/students/${username}/grade_sheets/${evt_code}`
      );

      dispatch(modifyGradeSheet(update.data));
    } catch (error) {
      console.log("There was a problem updating the gradesheet \n", error);
    }
  };
};

export const updateManeuvers = (edits, id) => {
  return async (dispatch) => {
    try {
      //Currently loops through array of maneuvers and sends UPDATE request one by one
      for (let key in edits) {
        await instance.put(
          `/server/grade_sheet_maneuvers/${edits[key].id}`,
          edits[key].data
        );
      }

      const { data } = await instance.get(
        `/server/grade_sheets/${id}/maneuvers`
      );
      dispatch(modifyManeuvers(data));
    } catch (error) {
      console.log("There was a problem updating the maneuvers \n", error);
    }
  };
};

//REDUCER
export default function gradesReducer(state = {}, action) {
  switch (action.type) {
    case SET_GRADESHEET_ID:
      return { ...state, currentID: action.id };
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
