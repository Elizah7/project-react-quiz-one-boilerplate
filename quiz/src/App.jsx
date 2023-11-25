import { useState } from 'react'

import './App.css'
import Home from './Component/Home'
import Quiz from './Component/Quiz'
import ResultPage from './Component/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <ResultPage/>
  
    </>
  )
}

export default App
