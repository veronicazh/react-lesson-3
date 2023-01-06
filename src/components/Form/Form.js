import React, { useState } from 'react'
import './index.css'

export default function Form ({ addContact, onCancelClick, switchFormVisibility }) {

  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    id: Math.random()
  })

  function onInputChange (event) {
    setFormData(
      {...formData, [event.target.name]: event.target.value}
    )
  }

  function clearForm () {
    setFormData({
      ...formData,
      firstName: '',
      lastName: '',
      phoneNumber: ''
    })
  }

  function onFormSubmit (event) {
    event.preventDefault()
    addContact(formData)
    clearForm()
    switchFormVisibility()
  }

  return (
    <form onSubmit={onFormSubmit} className='form'>
      <input 
        type='text'
        name='firstName'
        placeholder='Enter first name' 
        value={formData.firstName} 
        onChange={onInputChange}
      />
      <input 
        type='text' 
        name='lastName'
        placeholder='Enter last name'
        value={formData.lastName}
        onChange={onInputChange}
      />
      <input 
        type='text' 
        name='phoneNumber'
        placeholder='Enter phone number' 
        value={formData.phoneNumber}
        onChange={onInputChange}
      />
      <div>
        <button type='button' onClick={onCancelClick}>Cancel</button>
        <button 
          type='submit'
          disabled={!(formData.firstName.length > 1 && formData.lastName.length > 1 && formData.phoneNumber.length > 1)}
        >Add</button> 
      </div>
    </form>
  )
}