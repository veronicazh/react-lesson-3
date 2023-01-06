import React, {useState} from 'react'
import List from './components/List'
import Form from './components/Form'
import './App.css'


export default function App () {

  const contactList = [
    {
      firstName: 'Veronica',
      lastName: 'Zhukova', 
      phoneNumber: '0994683711',
      id: Math.random()
    },
    {
      firstName: 'Masha',
      lastName: 'Kasha', 
      phoneNumber: '0994423711',
      id: Math.random()
    },
  ]

  let [contacts, setContacts] = useState(contactList)
  let [formVisible, setFormVisible] = useState(false)


  function deleteContact (id) {
    let filteredContacts = contacts.filter((elem) => elem.id !== id)
    setContacts(filteredContacts)
  }

  function addContact (item) {
    setContacts([...contacts, item])
  }

  function onCancelClick () {
    setFormVisible(false)
  }

  function switchFormVisibility () {
    setFormVisible(!formVisible)
  }

  return (
    <div>
      <List 
        contacts={contacts}
        deleteContact={deleteContact}
      />
      <button onClick={switchFormVisibility}>{formVisible ? 'Hide form' : 'Add contact'}</button>
      {formVisible ? <Form
        addContact={addContact}
        onCancelClick={onCancelClick}
        switchFormVisibility={switchFormVisibility}
      /> : ''}
      
    </div>
  )
}

