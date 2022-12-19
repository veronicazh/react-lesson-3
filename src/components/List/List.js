import React from 'react'
import './index.css'
import ContactItem from './ContactItem';

class List extends React.Component {
  render () {

    const { contacts, deleteContact } = this.props;

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className='table-heading'>First name</td>
              <td className='table-heading'>Last name</td>
              <td className='table-heading'>Phone number</td>
            </tr>
            {contacts.map((elem) => {
              return (
                <ContactItem 
                  currentContact={elem} 
                  id={elem.id}
                  deleteContact={deleteContact}
                  key={elem.id}
                />
              )})
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default List;