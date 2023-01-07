import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {
  const [conected, setConected] = useState(contact.conected)

  const changeConected = () => {
    setConected(conected ? false : true)
    contact.conected = contact.conected ? false : true
  }

  return (
    <div>
      <h3>{contact.name}</h3>
      <h4>{contact.lastname}</h4>
      <h5>{contact.email}</h5>
      <div>
        <button onClick={changeConected}>
          {contact.conected
            ? 'Contacto En Linea'
            : 'Contacto No Disponible'}
        </button>
      </div>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent
