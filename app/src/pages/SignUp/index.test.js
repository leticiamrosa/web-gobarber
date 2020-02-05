import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SignUp from './index';

const setup = propOverrides => {
  const props = Object.assign({
    t: jest.fn()
  },propOverrides);

  const result = shallow(<SignUp {...props} />);

  return {
    props,
    result,
  };
};

describe('SignUp component', () => {

  it('should renders component without crashing', () => {
    //given
    //when
    const { result } = setup();
    //then
    expect(toJson(result)).toMatchSnapshot();
  })

  describe('component renders with props', () => {

    it('when received i18n props', () => {
    //given
    const props = {

    }
    //when
    const { result } = setup();
    const expectedElement = result.find('form').find('#email');
    console.log(expectedElement.debug())

    //then
    // expect(expectedElement.exists()).toBe(true);
  })
  });

});


describe('renders inputs', () => {

  it('should renders email input', () => {
    //given
    const props = {
      email: 'leticia@dev.com'
    }
    //when
    const { result } = setup(props);
    console.log(result.find('email'))
    //then
    // expect(result.find('email'))
  })
});

