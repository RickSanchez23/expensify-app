import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import expenseReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  return createStore(
    combineReducers({
      expense: expenseReducer,
      filters: filtersReducer,
    }),
      composeEnhancer(applyMiddleware(thunk))
  );
};
