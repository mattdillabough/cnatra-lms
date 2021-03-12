//User Redux store
import axios from "axios";

const baseUrl = "http://localhost:5000";

//ACTIONS
const GET_USER = "GET_USER";

//ACTION CREATORS: formats action as an object so it can be passed to reducer
//This is just an example, will probably change later
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
      let { data } = await axios.get(
        `${baseUrl}/server/users/41e0ef686ae646528759e6b4238bf994`
      );
      console.log("Getting user", data);
      //Dispatch action to reducer (below) after it has been reformatted to an object
      dispatch(findUser(data));
    } catch (error) {
      console.log("Error: that user was not found", error);
    }
  };
};

//REDUCER: depending on action type reducer will modify the app's state accordingly
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.userInfo };
    default:
      return state;
  }
}
