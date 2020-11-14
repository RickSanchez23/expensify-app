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

export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses

    }
}

export const setExpensesAsync = () => {

    return (dispatch) => {
        return database.ref('expenses').once('value').then(snapshot => {
            const expensesList = [];
            snapshot.forEach(snapshotChild => {
                expensesList.push({
                    id : snapshotChild.key ,
                    ...snapshotChild.val()
                });
            });
            dispatch(setExpenses(expensesList));
        });

    }
}
