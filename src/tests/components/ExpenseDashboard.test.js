import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from "../../component/ExpenseDashboard";

test('should render Expense Dashboard' , () => {
    const wrapper = shallow(<ExpenseDashboard/>);
    expect(wrapper).toMatchSnapshot();

})
