import React from 'react';
import {EditExpense} from "../../component/EditExpense";
import expenses from "../fixtures/expenses";
import {shallow} from "enzyme";

let wrapper , history , deleteExpense , editExpense , expense;

beforeEach(()=>{
    history = { push : jest.fn() };
    deleteExpense= jest.fn();
    editExpense= jest.fn();
    expense= expenses[0]
    wrapper = shallow(<EditExpense expense={expenses[0]} history={history} editExpense={ editExpense} deleteExpense={deleteExpense}  />)
})

test("should edit expense render correctly" , ()=>{
    expect(wrapper).toMatchSnapshot();
});

test("should edit expense" , ()=>{
    wrapper.find('ExpenseFrom').prop('onSubmit')(expense);
    expect(editExpense).toHaveBeenCalledWith(expense.id , expense);
    expect(history.push).toHaveBeenCalledWith('/');
})

test("should delete expense" , ()=>{
    wrapper.find('button').prop('onClick')();
    expect(deleteExpense).toHaveBeenCalledWith(expense.id);
    expect(history.push).toHaveBeenCalledWith('/');

})
