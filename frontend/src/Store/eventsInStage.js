//Events in Stage Store
//For populating gradeComparison data
import axios from "axios";

const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL });

//ACTIONS
const GET_STAGE_MANEUVERS = "GET_STAGE_MANEUVERS";
const GET_STAGE_GRADES = "GET_STAGE_GRADES";

//ACTION CREATORS
const getStageManeuvers = (data) => {
  return {
    type: GET_STAGE_MANEUVERS,
    data,
  };
};
const getStageGrades = (grades) => {
  return {
    type: GET_STAGE_GRADES,
    grades,
  };
};

// THUNK CREATORS
//Fetches all the maneuvers in a stage
export const fetchManeuvers = (stage) => {
  return async (dispatch) => {
    try {
      const { data } = await instance.get(`/server/stages/${stage}/maneuvers`);

      dispatch(getStageManeuvers(data));
    } catch (error) {
      console.log(
        "There was a problem fetching the events in the stage \n",
        error
      );
    }
  };
};

//Fetches all student's grades in the stage
export const fetchGrades = (ids) => {
  return async (dispatch) => {
    try {
      //Assuming we're given an array of gradesheet ids
      let data = {};
      for (let obj of ids) {
        const gradesheet = await instance.get(
          `/server/grade_sheets/${obj.id}/maneuvers`
        );
        data[obj.eventCode] = gradesheet.data;
      }
      dispatch(getStageGrades(data));
    } catch (error) {
      console.log("There was a problem fetching the stage grades \n", error);
    }
  };
};

//REDUCER

export default function eventsInStageReducer(state = {}, action) {
  switch (action.type) {
    case GET_STAGE_MANEUVERS:
      return { ...state, stageEvents: action.data };
    case GET_STAGE_GRADES:
      return { ...state, stageGrades: action.grades };
    default:
      return state;
  }
}
