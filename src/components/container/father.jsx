import React, { useState } from 'react'
import Child from '../pure/child'

const Father = () => {
  const [message, setMessage] = useState('example')
  const [name, setName] = useState('Deault')
  const showMessage = (text) => {
    setMessage(text)
    alert(`Message: ${text}`)
  }

  const updateName = (name) => {
    setName(name)
    alert(`Name: ${name}`)
  }

  return (
    <div style={{background: 'tomato', padding: '10px'}}>
      <h1>Hi {name}, {message}</h1>
      <Child name={name} send={showMessage} update={updateName} />
    </div>
  )
}

export default Father
