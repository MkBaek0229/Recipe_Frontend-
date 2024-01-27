import { useState } from 'react'
import Mainpage from './page/Mainpage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Mainpage />
    </div> 
  )
}

export default App
