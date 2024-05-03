import React, { useState } from 'react';
import '../App.css'


function FunctionTrafficLight({ myColors }) {
  
  const [currentColorIndex, setCurrentColorIndex] = useState(0); 

  const nextState = () => {
    setCurrentColorIndex((currentColorIndex + 1) % myColors.length); 
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <div className="main-container">
        {myColors.map((color, index) => (
          <div
            key={index}
            className={`${color}-light ${index === currentColorIndex && 'active'}`}
          ></div>
        ))}
        <div className="the-buttons">
          <button onClick={nextState}>Next State</button>
        </div>
      </div>
    </div>
  )
}

export default FunctionTrafficLight;