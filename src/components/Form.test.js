import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form.js';


describe('Form', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(
      <Form
        name='Colby'
        quote='#grindin'
        superlative='most likely to eat all the za'
      />
    );

    expect(wrapper).toMatchSnapshot()
  });
});