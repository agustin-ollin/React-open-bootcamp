import React, { useState } from 'react'

// Definiendo estilos en constantes
//Estilo para usuario logeado
const loggedStyle = {
  color: 'green',
}

//Estilo para usuario no logeado
const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold',
}

const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false)

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <p>Hola, {props.name}</p> : <p>Please login</p>}
      <button
        onClick={() => {
          console.log('Boton pulsado')
          setLogged(!logged)
        }}
      >
        {logged ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default GreetingStyled
