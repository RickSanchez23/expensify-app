import uuid from "uuid";

export const addExpense = ({
  amount = 0,
  description = "",
  note = "",
  createAt = 0,
  id = uuid(),
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id,
    amount,
    description,
    note,
    createAt,
  },
});

export const deleteExpense = (itemId) => ({
  type: "REMOVE_EXPENSE",
  itemId,
});

export const editExpense = (itemId, updates) => ({
  type: "EDIT_EXPENSE",
  itemId,
  updates,
});
