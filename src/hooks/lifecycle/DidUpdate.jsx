/**Ejemplo de uso de metodo de componentDidUpdate en componente de clase y uso de hook en componente funcional */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      'Comportamiento cuando el componente recive nuevos props o cambi en su estado',
    )
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}

import React from 'react'

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      'Comportamiento cuando el componente recive nuevos props o cambi en su estado',
    )
  })

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  )
}
