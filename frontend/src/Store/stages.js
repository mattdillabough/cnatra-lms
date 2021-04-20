//Stages Redux Feducer
import axios from "axios";

const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL });

//ACTIONS
const GET_STAGES = "GET_STAGES";

//ACTION CREATORS
const getAllStages = (stages) => {
  return {
    type: GET_STAGES,
    stages,
  };
};

//THUNK CREATORS
export const fetchStages = () => {
  return async (dispatch) => {
    try {
      const { data } = await instance.get("/server/stages");
      dispatch(getAllStages(data.stages));
    } catch (error) {
      console.log("There was a problem fetching the stages \n", error);
    }
  };
};

//REDUCER
export default function stagesReducer(state = {}, action) {
  switch (action.type) {
    case GET_STAGES:
      return { ...state, stages: action.stages };
    default:
      return state;
  }
}
