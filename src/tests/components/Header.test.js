import React from "react";
import Header from "../../component/Header";
import { shallow } from "enzyme";

test("should Header render correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
