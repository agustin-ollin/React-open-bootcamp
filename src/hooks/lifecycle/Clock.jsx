import React, { useEffect, useState } from 'react'

/**
 * Ejercicios de sesiones 4, 5 y 6
 * @returns Element Clock
 */
const Clock = () => {
  const initialData = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José',
  }

  const [data, setData] = useState(initialData)

  useEffect(() => {
    const timerID = setInterval(() => {
      let edad = data.edad + 1
      setData({
        ...data,
        edad,
        fecha: new Date(),
      })
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [data])

  return (
    <div>
      <h2>Hora Actual: {data.fecha.toLocaleTimeString()}</h2>
      <h3>
        {data.nombre} {data.apellidos}
      </h3>
      <h1>Edad: {data.edad}</h1>
    </div>
  )
}

export default Clock
