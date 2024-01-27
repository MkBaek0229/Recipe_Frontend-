import { useState } from 'react'
import Mainpage from './page/Mainpage'
import { Route, Routes } from 'react-router-dom'
import Recipe from './page/Recipe'
import Refrigerator from './page/refrigerator'
import Myrecipe from './page/Myrecipe'

function App() {
 
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
      <Route path="/recipe" element={<Recipe />}></Route>
      <Route path="/myrecipe" element={<Myrecipe />}></Route>
      <Route path="/refrigerator" element={<Refrigerator />}></Route>
    </Routes>
    </div> 
  )
}

export default App
