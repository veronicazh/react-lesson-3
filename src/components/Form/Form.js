import React from 'react'
import './index.css'

class Form extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    phone: '', 
    id: Math.random()
  }

  onInputValueChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  clearForm = () => {
    this.setState({
      ...this.state,
      firstName: '',
      lastName: '',
      phone: '',
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addContact(this.state)
    this.clearForm()
    this.props.onCancelClick()
  } 

  render () {

    const {onCancelClick} = this.props;

    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input 
          type='text' 
          placeholder='Enter first name'
          value={this.state.firstName}
          name='firstName'
          onChange={this.onInputValueChange}
          className='formInput'
        />
        <input 
          type='text' 
          placeholder='Enter last name'
          value={this.state.lastName}
          name='lastName'
          onChange={this.onInputValueChange}
          className='formInput'
        />
        <input 
          type='text' 
          placeholder='Enter phone'
          value={this.state.phone}
          name='phone'
          onChange={this.onInputValueChange}
          className='formInput'
        />
        <div>
          <button 
            type='button' 
            onClick={onCancelClick} 
            className='cancelButton'>Cancel</button>
          <button 
            type='submit' 
            disabled={!(this.state.firstName.length > 1 && this.state.lastName.length > 1 && this.state.phone.length > 1)}>OK</button>
        </div>
      </form>
    )
  }
}

export default Form;