import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../component/NotFound";

test('should render Not Found' , () => {
    const wrapper = shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();

})
