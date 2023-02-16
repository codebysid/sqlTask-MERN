import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import AddEmployee from './component/AddEmployee'
import AddDepartment from './component/AddDepartment'
import Queries from './component/Queries'
import List from './component/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/addDepartment' element={<AddDepartment/>}/>
        <Route path='/queries' element={<Queries/>}/>
      </Routes>
      <List/>
    </div>
  )
}

export default App
