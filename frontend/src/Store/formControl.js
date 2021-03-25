//For controlling form editability

//ACTIONS
const TOGGLE_MANEUVER_MODE = "TOGGLE_MANEUVER_MODE";

//ACTION CREATOR
export const toggleManeuverMode = () => ({ type: TOGGLE_MANEUVER_MODE });

//REDUCER
export default function formControlReducer(
  state = { maneuverMode: false },
  action
) {
  switch (action.type) {
    case TOGGLE_MANEUVER_MODE:
      return { ...state, maneuverMode: !state.maneuverMode };
    default:
      return state;
  }
}
