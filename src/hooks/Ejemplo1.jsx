/** Ejemplo de uso del hook useState */
import React, { useState } from 'react'

const Ejemplo1 = () => {
  const valueInit = 0

  const personInit = {
    name: 'ollin',
    email: 'ollin@gmail.com',
  }

  const [count, setCount] = useState(valueInit)
  const [person, setPerson] = useState(personInit)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const updatePerson = () => {
    setPerson({
      name: 'Pepe',
      email: 'pepe@gmail.com',
    })
  }

  return (
    <div>
      <h1>Ejemplo de useState</h1>
      <h2>Contador: {count}</h2>
      <h2>Datos de la Persona:</h2>
      <ul>
        <li>Nombre: {person.name}</li>
        <li>Email: {person.email}</li>
      </ul>
        <button onClick={incrementCount}>Incrementar Contador</button>
        <br/>
        <button onClick={updatePerson}>Actualizar Persona</button>
    </div>
  )
}

export default Ejemplo1
