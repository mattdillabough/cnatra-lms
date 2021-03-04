//Navigation

//ACTION
export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
//ACTION CREATORS
export const toggleNav = ()=> (
  {
    type: TOGGLE_NAVBAR,
  }
)


//THUNK CREATOR

//REDUCER
export default function navigationReducer(state={navBar:false}, action){
  switch(action.type){
    case TOGGLE_NAVBAR:
      return {...state, navBar:!state.navBar}
    default:
      return state;
  }
}
