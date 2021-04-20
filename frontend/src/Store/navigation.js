//Navigation Redux Reducer

//ACTIONS
export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";

//ACTION CREATORS
export const toggleNav = () => ({
  type: TOGGLE_NAVBAR,
});

//REDUCER
export default function navigationReducer(state = { navBar: false }, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return { ...state, navBar: !state.navBar };
    default:
      return state;
  }
}
