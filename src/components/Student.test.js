import React from 'react';
import { shallow, mount } from 'enzyme';
import Student from './Student.js';


describe('Student', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(
      <Student 
        name='Colby'
        quote='#grindin'
        superlative='most likely to eat all the za'
      />
    );

    expect(wrapper).toMatchSnapshot()
  });
});
