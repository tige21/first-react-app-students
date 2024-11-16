// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { MyComponent } from './components/MyComponent'
// import { Task } from './components/Task'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import {First} from './components/First.jsx'
function App() {
  // const [inputValue, setInputValue] = useState('')
  // const [tasks, setTasks] = useState([])

  // const handleChange = (e) => {
  //   setInputValue(e.target.value)
  // }

  // const handleCreateTask = (e) => {
  //   setTasks([...tasks, inputValue])
  // }

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
