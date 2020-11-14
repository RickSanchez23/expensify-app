import {addExpenseAsync, deleteExpense, editExpense, setExpenses, setExpensesAsync} from "../../actions/expenses";
import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import expenses from "../fixtures/expenses";

const middleware = [thunk]
const createMockStore = configureStore(middleware);


beforeEach(done => {

    const expenseData = [];
    expenses.forEach(({ id,  description ,amount,  createAt}) => {
        expenseData[id] = { description , amount ,createAt };
    });
    database.ref('expenses').set(expenseData).then(()=>{
        done();
    })

});


test("should setup remove expense action object", () => {
    const action = deleteExpense(24);
    expect(action).toEqual({type: "REMOVE_EXPENSE", itemId: 24});
});

test("should setup set expense action object" , () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({type: "SET_EXPENSES", expenses});

})

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
            type: "ADD_EXPENSE",
            expense: {
                ...expense,
                id: expect.any(String)
            }
        });

        return database.ref('expenses/' + storeActions[0].expense.id).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expense);
        done();
    });


});

test("should fetch data from firebase" , done => {

    const store = createMockStore({}) ;
    store.dispatch(setExpensesAsync()).then( () => {

        const storeActions = store.getActions();
        expect(storeActions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();

    } );

})
