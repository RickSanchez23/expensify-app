import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Actions
//--Expense
const addExpense = ({
  amount = 0,
  description = "",
  note = "",
  createAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    amount,
    description,
    note,
    createAt,
  },
});

const deleteExpense = (itemId) => ({
  type: "REMOVE_EXPENSE",
  itemId,
});

const editExpense = (itemId, updates) => ({
  type: "EDIT_EXPENSE",
  itemId,
  updates,
});
//--Filters
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
const setTextFilter = (text) => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

//Reducers
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter((item) => item.id !== action.itemId);

    case "EDIT_EXPENSE":
      return state.map((item) => {
        if (item.id === action.itemId) {
          return { ...item, ...action.updates };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expense: expenseReducer,
    filters: filtersReducer,
  })
);

const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy }) => {
  return expenses.filter((item) => {
    const textFilterMatch = item.description
      .toLowerCase()
      .includes(text.toString());
    const startDateMatch =
      typeof startDate !== "number" || item.createAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || item.createAt <= endDate;
    return textFilterMatch && startDateMatch && endDateMatch;
  });
};

store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expense, state.filters));
});

const expenseOne = store.dispatch(
  addExpense({
    amount: 231,
    description: "Rent",
    note: "this is note 2",
    createAt: 200,
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    amount: 230,
    description: "Coffee",
    note: "this is note ",
    createAt: 800,
  })
);
store.dispatch(setStartDate(200));
store.dispatch(setEndDate(800));
store.dispatch(setTextFilter("rent"));
