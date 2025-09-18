import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

import { Route, Routes } from 'react-router-dom'
import Quiz from './Components/Quiz'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
    <ToastContainer position="top-center" autoClose={3000} />
</>
  )
}

export default App