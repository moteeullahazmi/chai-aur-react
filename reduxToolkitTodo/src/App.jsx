import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {


  return (
    <>
    {/* chai */}
      <h1>Learn Redux Tool Kit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
