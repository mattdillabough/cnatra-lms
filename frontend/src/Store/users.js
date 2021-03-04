//User Reducer
// import axios from "axios";

//ACTIONS
const GET_USER = "GET_USER";

//ACTION CREATORS
//This is just an example, will probably change later
const findUser = (userInfo) => {
  return {
    type: GET_USER,
    userInfo
  }
}
//THUNK CREATORS
//Frontend/client would provide id to search user
export const getUser = (id) => {
  return async dispatch => {
    try {
      //make call to backend to get user
      let data = {user:"dummy-user", info:"something or another"};
      //let {data} = await axios.get(`/api/users/${id}`)
      console.log("Getting user")
      //Dispatch action to reducer after it has been reformatted to an object
      dispatch(findUser(data))
    } catch(error) {
      console.log("Error: that user was not found", error)
    }
  }
}

//REDUCER
export default function userReducer(state={}, action){
  switch(action.type){
    case GET_USER:
      return {...state, user: action.userInfo}
    default:
      return state;
  }
}
