import React, { useEffect, useRef, useState } from 'react'

const Ejemplo2 = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const miRef = useRef()

  const incrementarCount1 = () => {
    setCount1(count1 + 1)
  }

  const incrementarCount2 = () => {
    setCount2(count2 + 1)
  }

  /*useEffect(() => {
    console.log('Cambio state')
    console.log('Mostrando referencia a elemento dedl DOM: ')
    console.log(miRef)
  })*/

  /* useEffect(() => {
    console.log('Cambio state')
    console.log('Mostrando referencia a elemento dedl DOM: ')
    console.log(miRef)
  }, [count1])*/

  useEffect(() => {
    console.log('Cambio state')
    console.log('Mostrando referencia a elemento dedl DOM: ')
    console.log(miRef)
  }, [count1, count2])
  

  return (
    <div>
      <h1>Ejemplo de useState</h1>
      <h2>Contador 1: {count1}</h2>
      <h2>Contador 2: {count2}</h2>

      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementarCount1}>Count 1</button>
        <button onClick={incrementarCount2}>Count 2</button>
      </div>
    </div>
  )
}

export default Ejemplo2
