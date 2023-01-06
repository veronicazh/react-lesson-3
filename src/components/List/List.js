import React from 'react'
import ContactItem from '../ContactItem'
import './index.css'


export default function List ({contacts, deleteContact}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone number</th>
        </tr>
        {contacts.map((elem) => {
          return (
            <ContactItem 
              currentContact={elem} 
              deleteContact={deleteContact}
              key={elem.id}
            />
          )
        })}
      </tbody>
    </table>
  )
}