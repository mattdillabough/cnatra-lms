//Redux Store
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducers
import userReducer from "./userReducer"


const reducer = combineReducers({
  userDetails: userReducer
});

const middleware = composeWithDevTools(
  //For development
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  //For production (no logging)
  // applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer, middleware);

export default store;
