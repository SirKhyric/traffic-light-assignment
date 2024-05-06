import { Component } from 'react';
import '../App.css'


class ClassTrafficLight extends Component {
  state = {
    currentColorIndex: 0, 
  };

  nextState = () => {
    const { myColors } = this.props;
    this.setState((prevState) => ({
      currentColorIndex: (prevState.currentColorIndex + 2) % myColors.length
    }));
  };

  render() {
    const { currentColorIndex } = this.state;
    const { myColors } = this.props;

    return (
      <div>
        <h2>Class Component</h2>
        <div className="main-container">
          {myColors.map((color, index) => (
            <div
              key={index}
              className={`${color}-light ${index === currentColorIndex && 'active'}`}
            ></div>
          ))}
          <div className="the-buttons">
            <button onClick={this.nextState}>Next State</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassTrafficLight;