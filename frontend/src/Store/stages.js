//Stages store
import axios from "axios";

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
      const { data } = await axios.get("/server/stages");
      dispatch(getAllStages(data));
    } catch (error) {
      console.log("Error: there was a problem fetching the stages: ", error);
    }
  };
};

export default function stagesReducer(state = {}, action) {
  switch (action.type) {
    case GET_STAGES:
      return { ...state, stages: action.stages };
    default:
      return state;
  }
}
