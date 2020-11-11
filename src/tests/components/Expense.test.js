import React from "react";
import { shallow } from "enzyme";
import Expenses from "../../component/Expense";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('should render Expense list item' , () => {
    const wrapper = shallow(<Expenses {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})
