import { useState } from 'react'
import FunctionTrafficLight from './Components/Functional-Traffic-Light'
import ClassTrafficLight from './Components/Class-Traffic-Light'
import colors from './Constant/colors'



function App() {
  return (
    <div className='functions-container'>
      <FunctionTrafficLight myColors={colors}/>
      <ClassTrafficLight myColors={colors}/>
    </div>
  )
}


export default App
