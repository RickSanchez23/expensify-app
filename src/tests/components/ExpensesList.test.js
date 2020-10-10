import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../component/ExpensesList";
import expenses from "../fixtures/expenses";

test("should render ExpenseList", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with null data", () => {
  const wrapper = shallow(<ExpensesList />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with empty data", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
