import React from 'react';
import Person from './Person';
import Student from './Student';
import './Cohort.css';

const Cohort = ({staff, students}) => {

  const staffCards = staff.map(membs => {
    return (
      <Person 
        photo={membs.photo}
        name={membs.name}
        quote={membs.quote}
        superlative={membs.superlative}
        key={membs.id}
      />
    )
  })

  const studentCards = students.map(studs => {
    return (
      <Student 
        photo={studs.photo}
        name={studs.name}
        quote={studs.quote}
        superlative={studs.superlative}
        key={studs.id}
      />
    )
  })

  return (
    <main>
      <div className='staff-container'>
        {staffCards}
      </div>
      <h2>Students</h2>
      <div className='student-container'>
        {studentCards}
      </div>
    </main>
  )
}

export default Cohort;
