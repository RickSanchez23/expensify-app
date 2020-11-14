import expenses from "../fixtures/expenses";
import expensesReducers from "../../reducers/expenses";
import {addExpense, editExpense, setExpenses} from "../../actions/expenses";
import moment from "moment";
import expensesReducer from "../../reducers/expenses";

test("should setup first initial", () => {
  const state = expensesReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const newExpenses = expensesReducers(expenses, {
    type: "REMOVE_EXPENSE",
    itemId: expenses[0].id,
  });
  expect(newExpenses).toEqual(
    expenses.filter((item) => item.id !== expenses[0].id)
  );
});

test("should not remove expense if id not found", () => {
  const newExpenses = expensesReducers(expenses, {
    type: "REMOVE_EXPENSE",
    itemId: 8,
  });
  expect(newExpenses).toEqual(expenses);
});

test("should add new expense with data", () => {
  const expense = {
    id: "6",
    description: "Games",
    amount: 11.5,
    note: "Call of Duty",
    createAt: moment(0).subtract(5, "days").valueOf(),
  };
  const newExpenses = expensesReducers(expenses, addExpense(expense));
  expect(newExpenses).toEqual([...expenses, expense]);
});

test("should edit expense by id", () => {
  const newExpenses = expensesReducers(
    expenses,
    editExpense(expenses[0].id, { note: "love test" })
  );
  expect(newExpenses).toEqual(
    expenses.map((item, position) => {
      if (position === 0) {
        return { ...item, note: "love test" };
      } else {
        return item;
      }
    })
  );
});

test("should not edit expense if id not found", () => {
  const newExpenses = expensesReducers(
    expenses,
    editExpense(8, { note: "love test" })
  );
  expect(newExpenses).toEqual(expenses);
});

test("should set expense" , () => {

  const action = setExpenses(expenses);
  const state = expensesReducer([expenses[0]] , action);
  expect(state).toEqual(expenses);

})
