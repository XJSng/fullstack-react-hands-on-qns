import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AirQuality() {

  const [psi, setPsi] = useState();

  const getAirQualityText = () => {
    if (parseInt(psi) <= 50) {
      return "Health"
    } else if (parseInt(psi) <= 150) {
      return "Moderate"
    }
    else if (parseInt(psi) <= 200) {
      return "Unhealthy"
    }
    else if (parseInt(psi) > 200) {
      return "Hazardous"
    } else
      return "Please enter the PSI";
  }

  const getAirQualityColor = () => {
    if (parseInt(psi) <= 50) {
      return "green"
    } else if (parseInt(psi) <= 150) {
      return "yellow"
    }
    else if (parseInt(psi) <= 200) {
      return "orange"
    }
    else if (parseInt(psi) > 200) {
      return "red"
    } else
      return "white";
  }


  return (
    <React.Fragment>

      <div className='container mt-3' style={{ textAlign: "center" }}>
        <h1>Air Quality</h1>
        <div>
          <label className='me-2'>Enter the PSI:</label>
          <input type="text"
            value={psi}
            onChange={(e) => { setPsi(e.target.value) }}
          />
        </div>

        <div id="air-quality"
          style={{
            color: 'black',
            backgroundColor: getAirQualityColor(),
            borderRadius: "10px",
            textAlign: "center",
            margin: "auto"
          }} className='mt-2 mx-auto'
        >
          {getAirQualityText()}
        </div>
      </div>
    </React.Fragment>
  )

}