import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import calReducer from './reducers/cal'

const rootReducer = combineReducers({
    cal: calReducer
})

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

export default configureStore
