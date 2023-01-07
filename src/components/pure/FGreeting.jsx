import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function FGreeting({ age, name }) {
  const [edad, setEdad] = useState(age)

  const birthDay = () => setEdad(edad + 1)

  return (
    <div>
      <h1>Hi {name}</h1>
      <h2>Tu edad es de: {edad}</h2>
      <div>
        <button onClick={birthDay}>Cambiar edad</button>
      </div>
    </div>
  )
}

FGreeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}

export default FGreeting
