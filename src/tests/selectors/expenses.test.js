import moment from "moment";
import expenses from "../fixtures/expenses";
import { getVisibleExpenses } from "../../selectors/expenses";

test("should filter by text", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const expensesData = getVisibleExpenses(expenses, filters);
  expect(expensesData).toEqual([expenses[1], expenses[0]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0).valueOf(),
    endDate: undefined,
  };
  const expensesData = getVisibleExpenses(expenses, filters);
  expect(expensesData).toEqual([expenses[2], expenses[3]]);
});

test("should filter bt end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(3, "days").valueOf(),
  };
  const expensesData = getVisibleExpenses(expenses, filters);
  expect(expensesData).toEqual([expenses[3], expenses[1], expenses[0]]);
});

test("should sort by day", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const expensesData = getVisibleExpenses(expenses, filters);
  expect(expensesData).toEqual([
    expenses[2],
    expenses[3],
    expenses[1],
    expenses[0],
  ]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const expensesData = getVisibleExpenses(expenses, filters);
  expect(expensesData).toEqual([
    expenses[0],
    expenses[2],
    expenses[3],
    expenses[1],
  ]);
});
