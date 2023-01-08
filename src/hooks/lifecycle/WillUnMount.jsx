/** Ejemplo de uso del metodo component WillUnmount para componente clase y ejemplo de uso de hooks para uso funcional(cuando el componente vaa a desaparecer) */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log('Comportamiento antes de que el componente desaparezca')
  }

  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    )
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    //nada

    return () => {
      console.log('Comportamiento antes de que el componente desaparezca')
    }
  }, [])

  return (
    <div>
      <h1>WillUnMountHook</h1>
    </div>
  )
}
