import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense,
});

export const addExpenseAsync = (expenseData) => {
    const {amount = 0, description = "", note = "", createAt = 0} = expenseData;
    return (dispatch) => {
        const expense = {amount, description, note, createAt}
        return database.ref('expenses')
            .push(expense)
            .then(ref => {
                dispatch(addExpense({
                    ...expense,
                    id: ref.key
                }));
            }).catch(err => {
                console.log("error" , err)
            });
    }
}

export const deleteExpense = (itemId) => ({
    type: "REMOVE_EXPENSE",
    itemId,
});

export const editExpense = (itemId, updates) => ({
    type: "EDIT_EXPENSE",
    itemId,
    updates,
});
