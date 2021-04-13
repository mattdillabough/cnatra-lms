//Events in Stage Store
//For populating gradeComparison data
import axios from "axios";

const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL });

//ACTIONS
const GET_ALL_EVENTS = "GET_ALL_EVENTS";

//ACTION CREATORS
const getAllEvents = (data) => {
  return {
    type: GET_ALL_EVENTS,
    data,
  };
};

// THUNK CREATORS
//Fetches all the maneuvers in a stage
export const fetchEvents = (stage) => {
  return async (dispatch) => {
    try {
      const { data } = await instance.get(`/server/stages/${stage}/maneuvers`);

      dispatch(getAllEvents(data));
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
    case GET_ALL_EVENTS:
      return { ...state, stageEvents: action.data };
    default:
      return state;
  }
}
