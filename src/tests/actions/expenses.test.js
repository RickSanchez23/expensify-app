import { addExpense, deleteExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = deleteExpense(24);
  expect(action).toEqual({ type: "REMOVE_EXPENSE", itemId: 24 });
});

test("should setup edit expense action object", () => {
  const updates = {
    description: "this is description",
    note: "this is note",
    amount: 200,
    createAt: 162315233,
  };
  const action = editExpense(24, updates);
  expect(action).toEqual({ type: "EDIT_EXPENSE", itemId: 24, updates });
});

test("should add expense action object", () => {
  const expenseData = {
    description: "Rent",
    note: "last month rent",
    amount: 300,
    createAt: 162315233,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should add expense action object with default data", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      amount: 0,
      description: "",
      note: "",
      createAt: 0,
      id: expect.any(String),
    },
  });
});
