import {addExpenseAsync, deleteExpense, editExpense} from "../../actions/expenses";
import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const middleware = [thunk]
const createMockStore = configureStore(middleware);

test("should setup remove expense action object", () => {
    const action = deleteExpense(24);
    expect(action).toEqual({type: "REMOVE_EXPENSE", itemId: 24});
});

test("should setup edit expense action object", () => {
    const updates = {
        description: "this is description",
        note: "this is note",
        amount: 200,
        createAt: 162315233,
    };
    const action = editExpense(24, updates);
    expect(action).toEqual({type: "EDIT_EXPENSE", itemId: 24, updates});
});


test("should add expense with defaults to database and store", done => {

    const store = createMockStore({});
    const expense = {
        description: "coffee with a friend",
        note: "Coffee",
        amount: '2$',
        createAt: 125887292
    }
    store.dispatch(addExpenseAsync(expense)).then(() => {
        const storeActions = store.getActions();
        expect(storeActions[0]).toEqual({
            type : "ADD_EXPENSE" ,
            expense : {
                ...expense ,
                id : expect.any(String)
            }
        });

        return database.ref('expenses/' + storeActions[0].expense.id ).once('value' );
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expense);
        done();
    });


});
