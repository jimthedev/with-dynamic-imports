import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Index from './index';


test('Should render the index', () => {
  const wrapper = shallow(<Index name="test" value="Address" />);

  expect(wrapper.props().children[0]).toEqual('Say hello to ');
  expect(wrapper.find(Link).props().children).toEqual('test');
});
