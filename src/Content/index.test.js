import React from 'react';
import { shallow } from '../enzyme';
import Content from './';

describe('Content component tests', () => {
  it('Renders Content', () => {
    shallow(<Content />);
  });

  it('Renders Content with correct prop values', () => {
    const wrapper = shallow(<Content content="<div><p>Everything is awesome</p><p>This <strong>is</strong> a test</p></div>" customClass="text-red" />);
    const contentHtml = '<div class="Content text-red"><div><p>Everything is awesome</p><p>This <strong>is</strong> a test</p></div></div>';
    expect(wrapper.html()).toEqual(contentHtml);
  });
});