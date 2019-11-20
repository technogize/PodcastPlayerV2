import React from 'react';
import { shallow } from '../enzyme';
import Title from './';

describe('Title component tests', () => {
  it('renders a title', () => {
    shallow(<Title />);
  });
});