/**
 * Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR: Instancia el componente')
  }

  render() {
    return <div></div>
  }

  componentDidMount() {
    console.log(
      'DIDMOUNT: Justo al del montaje del componente, antes de renderizarlo',
    )
  }

  componentWillUnmount(){
    console.log('WILLUNMOUNT: Justo antes de desaparecer')
  }

  shouldComponentUpdate(nextProps, nextState) {
    /** Controlar si el componente debe o no actualizarse */
  }
}

LifeCycleExample.propTypes = {}

export default LifeCycleExample
