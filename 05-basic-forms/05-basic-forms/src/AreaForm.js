import React, { useState } from 'react'

export default function AreaForm() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")

  // Calculate Area here
  let calculatedArea = 0
  if (!width && !height) {
    calculatedArea = "Please enter the width & height.";
  }
  else if (!width) {
    calculatedArea = "Please enter the width.";
  } else if (!height) {
    calculatedArea = "Please enter the height.";
  }
  else {
    calculatedArea = parseInt(width) * parseInt(height)
  }


  return (
    <React.Fragment>
      <div>
        <label>Width:</label>
        <input type="text"
          value={width}
          onChange={(e) => {
            setWidth(() => e.target.value)
          }} />
      </div>
      <div>
        <label>Height:</label>
        <input type="text"
          value={height}
          onChange={(e) => {
            setHeight(() => e.target.value)
          }} />
      </div>
      <div onChange={(width, height) => {
        calculatedArea(width, height)
      }}>Area = {calculatedArea}</div>
    </React.Fragment>
  )

  const updateWidth = (event) => {

  }

  const updateHeight = (event) => {

  }

}

