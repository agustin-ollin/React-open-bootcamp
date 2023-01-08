import React, { useContext, useEffect, useState } from 'react'

const miContexto = React.createContext(null)
/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe el padre
 */
const Component1 = () => {
  const state = useContext(miContexto)
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Component2 />
    </div>
  )
}

const Component2 = () => {
  const state = useContext(miContexto)
  return (
    <div>
      <h2>La sesion es: {state.session}</h2>
    </div>
  )
}

export const MiComponentConContexto = () => {
  const stateInit = {
    token: '12345',
    session: 1,
  }

  const [sessionData, setSessionData] = useState(stateInit)

  const updateSession = () => {
    setSessionData({
      token: 'JWE123155',
      session: sessionData.session + 1,
    })
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
      {/* Ademas, si se actualiza, los componentes de aqui, tambien lo actualizan */}
      <h1>Ejemplo de useState y useContext</h1>
      <Component1 />
      <button onClick={updateSession}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}

export default MiComponentConContexto
