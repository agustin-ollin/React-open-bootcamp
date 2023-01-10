import React, { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'
import ContactForm from '../pure/forms/contactForm'

const ContactListComponent = () => {
  const defaultContact = new Contact(
    'Ollin',
    'Garcia',
    'ollingonzalez37@gmail.com',
    false,
  )

  const defaultContact2 = new Contact(
    'Agustin',
    'Gonzalez',
    'agus@gmail.com',
    true,
  )

  const [contacts, setContacts] = useState([defaultContact, defaultContact2])

  const conectedContact = (contact) => {
    const i = contacts.indexOf(contact)
    const tempContact = [...contacts]
    tempContact[i].conected = !tempContact[i].conected
    setContacts(tempContact)
  }

  const deleteContact = (contact) => {
    const i = contacts.indexOf(contact)
    const tempContact = [...contacts]
    tempContact.splice(i, 1)
    setContacts(tempContact)
  }

  const addContact = (contact) => {
    const tempContact = [...contacts]
    tempContact.push(contact)
    setContacts(tempContact)
  }

  return (
    <div className="container-fluid min-width">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Conected</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <ContactComponent
              key={i}
              contact={contact}
              conected={conectedContact}
              remove={deleteContact}
            />
          ))}
        </tbody>
      </table>

      <ContactForm add={addContact} />
    </div>
  )
}

export default ContactListComponent
