import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup initial filters state", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month").valueOf(),
    endDate: moment().endOf("month").valueOf(),
  });
});

test("should set sort by amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month").valueOf(),
    endDate: moment().endOf("month").valueOf(),
  });
});

test("should set sort by date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month").valueOf(),
    endDate: moment().endOf("month").valueOf(),
  });
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "bill",
  });
  expect(state).toEqual({
    text: "bill",
    sortBy: "date",
    startDate: moment().startOf("month").valueOf(),
    endDate: moment().endOf("month").valueOf(),
  });
});

test("should set start  date", () => {
  const startDate = moment().add(20, "year").valueOf();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: startDate,
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: startDate,
    endDate: moment().endOf("month").valueOf(),
  });
});

test("should set end  date", () => {
  const endDate = moment().add(20, "year").valueOf();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: endDate,
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month").valueOf(),
    endDate: endDate,
  });
});
