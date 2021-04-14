//Events in Stage Store
//For populating gradeComparison data
import axios from "axios";

const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL });

//ACTIONS
const GET_STAGE_MANEUVERS = "GET_STAGE_MANEUVERS";

//ACTION CREATORS
const getStageManeuvers = (data) => {
  return {
    type: GET_STAGE_MANEUVERS,
    data,
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
        "Error: there was a problem fetching the events in the stage ",
        error
      );
    }
  };
};

//REDUCER

export default function eventsInStageReducer(state = {}, action) {
  switch (action.type) {
    case GET_STAGE_MANEUVERS:
      return { ...state, stageEvents: action.data };
    default:
      return state;
  }
}
