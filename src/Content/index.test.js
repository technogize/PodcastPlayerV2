import React from 'react';
import { shallow } from '../enzyme';
import Content from './';

describe('Content component tests', () => {
  it('Renders Content', () => {
    shallow(<Content />);
  });
});