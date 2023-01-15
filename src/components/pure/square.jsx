import React, { useEffect, useState } from 'react'

const maxColorValue = 256

const Square = () => {
  const [inSquare, setInSquare] = useState(false)
  const [rgbObject, setRgbObject] = useState({ red: 0, green: 0, blue: 0 })

  const dimensionsSquare = {
    width: '255px',
    height: '255px',
    backgroundColor: `rgb(${rgbObject.red},${rgbObject.green},${rgbObject.blue})`,
  }

  const startChangeColor = () => {
    setInSquare(true)
  }

  const stopChangeColor = () => {
    setInSquare(false)
  }

  const getRandom = (max) => Math.floor(Math.random() * max)

  useEffect(() => {
    if (inSquare) {
      const changeID = setInterval(() => {
        setRgbObject({
          red: getRandom(maxColorValue),
          green: getRandom(maxColorValue),
          blue: getRandom(maxColorValue),
        })
      }, 300)

      return () => {
        clearInterval(changeID)
      }
    }
  }, [rgbObject, inSquare])

  return (
    <div>
      <div
        onDoubleClick={stopChangeColor}
        onMouseOver={startChangeColor}
        onMouseOut={stopChangeColor}
        style={dimensionsSquare}
      ></div>
    </div>
  )
}

export default Square
