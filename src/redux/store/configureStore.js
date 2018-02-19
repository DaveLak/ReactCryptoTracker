import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import initialState from './initialState';

const loggerMiddleware = createLogger();

export default function configureStore(preloadeedState = initialState) {
  return createStore(
    rootReducer,
    preloadeedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}