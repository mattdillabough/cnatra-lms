//User Redux Reducer
//CURRENTLY NOT IN USE; USE FOR REFERENCE
import axios from "axios";

const baseUrl = "http://localhost:5000";

//ACTIONS
const GET_USER = "GET_USER";

//ACTION CREATORS: Formats action as an object so it can be passed to reducer
const findUser = (userInfo) => {
  return {
    type: GET_USER,
    userInfo,
  };
};

//THUNK CREATORS
//Frontend/client would provide id to search user
export const getUser = (id) => {
  return async (dispatch) => {
    try {
      //make call to backend to get user
      let { data } = await axios.get(`${baseUrl}/server/users/${id}`);

      //Dispatch action to reducer (below) after it has been reformatted to an object
      dispatch(findUser(data));
    } catch (error) {
      console.log("There was a problem retreiving that user \n", error);
    }
  };
};

//REDUCER: depending on action type sent from action creator, reducer will modify the app's state
//When creating a new reducer make sure to add it to the combined reducer in ./index.js
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.userInfo };
    default:
      return state;
  }
}
