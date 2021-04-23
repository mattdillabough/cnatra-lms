//Redux Store
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
// import userReducer from "./users";
import navigation from "./navigation";
import students from "./students";
import grades from "./grades";
import formControls from "./formControl";
import eventsInStage from "./eventsInStage";
import stages from "./stages";

//This 'master reducer' determines what the props are called when state is referenced within a connected component
//If the Redux logger is active you should be able to see actions from these reducers as they're called in the browser console
const reducer = combineReducers({
  // userDetails: userReducer,
  students,
  navigation,
  grades,
  formControls,
  EIS: eventsInStage,
  stages,
});

const middleware = composeWithDevTools(
  //For development
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  //For production (no logging)
  // applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer, middleware);

export default store;
