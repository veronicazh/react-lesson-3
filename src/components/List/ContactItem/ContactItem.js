import React from 'react'
import './index.css'

class ContactItem extends React.Component {
  render () {

    const { currentContact, id, deleteContact } = this.props;

    return (
      <tr>
        <td>{currentContact.firstName}</td>
        <td>{currentContact.lastName}</td>
        <td>{currentContact.phone}</td>
        <th className='delete' onClick={() => deleteContact(id)}>X</th>
      </tr>
    )
  }
}

export default ContactItem;