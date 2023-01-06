import React from 'react'
import './index.css'

export default function ContactItem ({currentContact, deleteContact}) {
  return (
    <tr>
      <td>{currentContact.firstName}</td>
      <td>{currentContact.lastName}</td>
      <td>{currentContact.phoneNumber}</td>
      <th className='delete' onClick={() => deleteContact(currentContact.id)}>X</th>
    </tr>
  )
}