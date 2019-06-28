import React from 'react';
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort.js';

const mockStaff = [
  {id: 1,
  name:'Leta', 
  quote:'Take a ballet pom', 
  superlative:'most likely to learn me React'}
]

const mockStudents = [
  {id: 1,
  name:'Colby', 
  quote:'Im hungry', 
  superlative:'most likely to win an eating competition'}
]

describe('Cohort', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Cohort 
        staff={mockStaff}
        students={mockStudents}
      />
    )
  })
  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
});