import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

const ContactListComponent = () => {
  const defaultContact = new Contact(
    'Ollin',
    'Garcia',
    'ollingonzalez37@gmail.com',
    false,
  )

  return (
    <div>
      <h2>Lista de Contactos:</h2>
      <ContactComponent
        contact={defaultContact}
      />
    </div>
  )
}

export default ContactListComponent
