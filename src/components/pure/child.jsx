import React, { useRef } from 'react'

const Child = ({ name, send, update }) => {
  const messageRef = useRef('')
  const nameRef = useRef('')

  const pressButton = () => {
    const text = messageRef.current.value
    alert(`Text in Input: ${text}`)
  }

  const pressButtonParams = (text) => alert(`Text: ${text}`)

  const submitName = (e) => {
    e.preventDefault()
    update(nameRef.current.value)
  }

  return (
    <div style={{background: 'cyan', padding: '30px'}}>
      <p onMouseOver={() => console.log('On Mouse Over')}>Child {name}</p>
      <button
        onClick={() => {
          console.log('Pressed Button 1')
        }}
      >
        Boton 1
      </button>
      <button onClick={pressButton}>Boton 2</button>

      <button onClick={() => pressButtonParams('Hi')}>Boton 3</button>
      <input
        ref={messageRef}
        placeholder="Send a text to your father"
        onFocus={() => console.log('Input Focused')}
        onChange={(e) => console.log('Input changed: ' + e.target.value)}
        onCopy={(e) => console.log('Copied text from Input ' + e.target.value)}
      />
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{marginTop: '20px'}}>
        <form onSubmit={submitName}>
            <input ref={nameRef} placeholder='New Name' />
            <button type='submit'>Update Name</button>
        </form>
      </div>
    </div>
  )
}

export default Child
