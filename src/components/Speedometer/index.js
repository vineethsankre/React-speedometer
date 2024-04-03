import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="banner-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed">Speed is 0mph</h1>
          <p className="speed-limit">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="buttons-container">
            <button className="button accelerate-btn" type="button">
              Accelerate
            </button>
            <button className="button brake-btn" type="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
