import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import initialState from "./initialState";

// Array of middleware to use
const middleware = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Only use redux-logger in development
if (process.env.NODE_ENV === `development`) {
  const loggerMiddleware = createLogger();
  middleware.push(loggerMiddleware);
}

export default function configureStore(preloadeedState = initialState) {
  return createStore(
    rootReducer,
    preloadeedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
