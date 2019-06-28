import React from 'react';
import './Student.css'

const Student = ({name, quote, superlative, photo}) => {
  return(
    <div className='card'>
      <img src={photo}/>
      <h3>{name}</h3>
      <p>{quote}</p>
      <h3>{superlative}</h3>
    </div>
  )
}

export default Student