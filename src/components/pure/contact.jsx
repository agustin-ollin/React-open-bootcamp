import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import '../../styles/contact.scss'

const ContactComponent = ({ contact, conected, remove }) => {
  const contactConected = () =>
    contact.conected ? (
      <h6 className="mb-0">
        <span
          onClick={() => conected(contact)}
          className="badge bg-success contact-action"
        >
          ON
        </span>
      </h6>
    ) : (
      <h6 className="mb-0">
        <span
          onClick={() => conected(contact)}
          className="badge bg-danger contact-action"
        >
          OFF
        </span>
      </h6>
    )

  return (
    <tr className="fw-normal">
      <th>
        <span>{contact.name}</span>
      </th>
      <td>
        <span>{contact.lastname}</span>
      </td>
      <td>
        <span>{contact.email}</span>
      </td>
      <td className="align-middle">
        {contactConected()}
        <i
          onClick={() => remove(contact)}
          className="bi-trash contact-action"
          style={{ color: 'tomato' }}
        ></i>
      </td>
    </tr>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  conected: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default ContactComponent
