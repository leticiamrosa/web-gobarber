import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";


describe('Renders App component', () => {

  it('should renders app component without crashing', () => {
    //given
    //when
    const wrapper = shallow(<App />);
    // const appComponent = wrapper.find("[data-test='apollo-provider'");
    expect(wrapper.length).toBe(1);
    //then
  })
});
