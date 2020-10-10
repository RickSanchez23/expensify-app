import React from "react";
import {AddExpense} from "../../component/AddExpense";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";

let wrapper , history , addExpense ;

beforeEach(() => {
    history = { push : jest.fn() } ;
    addExpense = jest.fn();
    wrapper = shallow( <AddExpense history={history} addExpense={addExpense} /> ) ;
});

test("should Add Expense render correctly" , () => {
    expect(wrapper).toMatchSnapshot();
})

test("should on form submit call" , () => {
    wrapper.find('ExpenseFrom').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/')
    expect(addExpense).toHaveBeenCalledWith(expenses[0])
});
