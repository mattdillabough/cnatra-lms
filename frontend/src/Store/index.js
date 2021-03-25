//Redux Store
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducers
import userReducer from "./users";
import navigation from "./navigation";
import grades from "./grades";
import formControls from "./formControl";

//This determines what the props are called when state is referenced within a connected component
const reducer = combineReducers({
  userDetails: userReducer,
  navigation,
  grades,
  formControls,
});

const middleware = composeWithDevTools(
  //For development
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  //For production (no logging)
  // applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer, middleware);

export default store;
