import React from 'react';
import { shallow } from '../enzyme';
import TextInput from './';

describe('TextInput component tests', () => {
  it('Renders TextInput', () => {
    shallow(<TextInput />);
  });

  it('Renders TextInput as expected', () => {
    const component = <TextInput 
                        name="name"
                        placeholder="Enter here..."
                        id="nameId"
                        inputCustomClass="Input__custom" 
                        labelCustomClass="Input__label-custom" 
                        label="First name" 
                        inputCustomClass="Input__custom" 
                      />;
    const expectedOutput = '<label class="Input__label-custom">First name</label><input type="text" id="nameId" name="name" placeholder="Enter here..." class="Input__custom"/>'
    const wrapper = shallow(component);
    expect(wrapper.html()).toEqual(expectedOutput);
  });
});