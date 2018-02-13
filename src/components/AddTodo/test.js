import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    const component = shallow(<AddTodo />);
    expect(component.find('.todo-input').length).toEqual(1);
  });
});