import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 23,
    }
  }

  render() {
    return (
      <div>
        <h1>Hi {this.props.name}</h1>
        <h2>Tu edad es de: {this.state.age}</h2>
        <div>
          <button onClick={this.birthDay}>Cambiar edad</button>
        </div>
      </div>
    )
  }

  birthDay = () => {
    this.setState((prevState) => ({ age: prevState.age + 1 }))
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Greeting
