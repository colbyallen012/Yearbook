import React, { Component } from 'react';
import Cohort from './Cohort.js';
import people from '../data/yearbook-data.js';
import Form from './Form.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudents = (newStudent) => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        <p>Add New Student</p>
        <Form addStudents={this.addStudents} />
        </header>
        <h2>Staff</h2>
        <Cohort staff={this.state.staff} students={this.state.students} />
      </div>
    );
  }
}

export default App;
