import React from 'react';
import { shallow } from '../enzyme';
import Title from './';

describe('Title component tests', () => {
  it('renders a title', () => {
    shallow(<Title />);
  });

  it('Renders Title with correct prop values', () => {
    const wrapper = shallow(<Title tag="h3" text="Everything is awesome" customClass="text-red" />);
    expect(wrapper.html()).toEqual('<h3 class="text-red">Everything is awesome</h3>');
  });
});