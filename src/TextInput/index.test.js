import React from 'react';
import { shallow } from '../enzyme';
import TextInput from './';

describe('TextInput component tests', () => {
  it('Renders TextInput', () => {
    shallow(<TextInput />);
  });
});