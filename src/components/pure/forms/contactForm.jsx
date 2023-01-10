import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class'

const ContactForm = ({ add }) => {
  const nameRef = useRef('')
  const lastNameRef = useRef('')
  const emailRef = useRef('')

  const addContact = (e) => {
    e.preventDefault()
    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false,
    )

    add(newContact)
  }

  return (
    <form
      onSubmit={addContact}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          placeholder="Name"
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
        />

        <input
          placeholder="Lastname"
          ref={lastNameRef}
          id="inputLastName"
          type="text"
          className="form-control form-control-lg"
          required
        />

        <input
          placeholder="Email"
          ref={emailRef}
          id="inputEmail"
          type="email"
          className="form-control form-control-lg"
          required
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2">
        Add
      </button>
    </form>
  )
}

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
}

export default ContactForm
