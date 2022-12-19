import './App.css'
import React from 'react'
import List from './components/List'
import Form from './components/Form'

class App extends React.Component {

  state = {
    contacts: [
      {
        firstName: 'Veronica',
        lastName: 'Zhukova',
        phone: '0994683711',
        id: Math.random()
      },
      {
        firstName: 'Masha',
        lastName: 'Kasha',
        phone: '0994683291',
        id: Math.random()
      }
    ],

    flag: false,

  }

  addContact = (newContact) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {...newContact}
      ]
    })
  }

  deleteContact = (id) => {
    this.setState({ contacts: this.state.contacts.filter((contact) => contact.id !== id)})
  }

  onButtonClick = () => {
    this.setState({...this.state.contacts, flag: !this.state.flag})
  }
 

  render () {

    return (
      <div className='App'>
        <List 
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
        <button onClick={this.onButtonClick} className='addButton'>
          {this.state.flag ? 'Hide form' : 'Add contact'}
        </button>
        {this.state.flag ? <Form 
          addContact={this.addContact} 
          contacts={this.state.contacts}
          onCancelClick={this.onButtonClick}
        /> : ''}
      </div>
    )
  }
}

export default App;
