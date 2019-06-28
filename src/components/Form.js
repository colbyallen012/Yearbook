import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitStudent = event => {
    event.preventDefault();
    const newStudents = {
      id: Date.now(),
      ...this.state
    }
    this.props.addStudents(newStudents);
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: '', quote: '', superlative: '' });
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input 
          type='text'
          placeholder='Quote'
          name='quote'
          value={this.state.quote}
          onChange={this.handleChange}
        />

        <input 
          type='text'
          placeholder='Superlative'
          name='superlative'
          value={this.state.superlative}
          onChange={this.handleChange}
        />

        <button onClick={event => this.submitStudent(event)}>Submit</button>

      </form>
    )
  }
}

export default Form;

