import React from 'react';
import { shallow } from '../enzyme';
import Button from './';

describe('Content component tests', () => {
  it('Renders Content', () => {
    shallow(<Button buttonText="warning" buttonClass="is-warning" />);
  });

  it('Renders routing Button as expected', () => {
    const component = <Button 
                        isLink
                        buttonText="Hello"
                        buttonClass="is-primary"
                        linkRoute="/"
                      />;
    const expectedOutput = '<a href="/" class="button is-primary">Hello</a>'
    const wrapper = shallow(component);
    expect(wrapper.html()).toEqual(expectedOutput);
  });
});