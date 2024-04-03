import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  onAccelerate = () => {
    this.setState(prevState => ({speed:prevState.speed + 10}))
  }
  onBrake = () => {
    this.setState(prevState => ({speed:prevState.speed - 10}))
  }
  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="banner-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button className="button accelerate-btn" type="button" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button className="button brake-btn" type="button" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
