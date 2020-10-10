import React from "react";
import { shallow } from "enzyme";
import ExpenseFrom from "../../component/ExpesnseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render Expense Form", () => {
  const wrapper = shallow(<ExpenseFrom />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expense Form with data", () => {
  const wrapper = shallow(<ExpenseFrom expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should set error when submit form with bad data", () => {
  const wrapper = shallow(<ExpenseFrom />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description when input change", () => {
  const value = "Coffee";
  const wrapper = shallow(<ExpenseFrom />);
  wrapper.find("input").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
});
test("should set amount when input change with correct data", () => {
  const value = "2";
  const wrapper = shallow(<ExpenseFrom />);
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});
test("should not set amount when input change with incorrect data", () => {
  const value = 'hello';
  const wrapper = shallow(<ExpenseFrom />);
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(wrapper.state("amount"));
});

test("should set note when input change", () => {
  const value = "coffee with a Friend";
  const wrapper = shallow(<ExpenseFrom />);
  wrapper.find("textarea").simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
});

test("should call props function with valid data" , ()=>{
    const onSubmit = jest.fn();
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseFrom onSubmit={onSubmit} expense={expense} />);
    wrapper.find('form').simulate('submit' , {
        preventDefault : ()=>{}
    });
    delete expense.id;
    expect(onSubmit).toHaveBeenCalledWith(expense);

} );

test("should set new date when date change" , () => {
    const date = moment();
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(date);
    expect(wrapper.state('createAt')).toBe(date);


});

test("should set calender focused" , () => {
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find("SingleDatePicker").prop('onFocusChange')( {focused : true} );
    expect(wrapper.state('isDatePickerVisible')).toBe(true);

})
