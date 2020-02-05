import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";


describe('Renders App component', () => {

  it('should renders app component without crashing', () => {
    //given
    //when
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
    //then
  })
});
