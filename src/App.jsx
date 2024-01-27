import React from 'react'
import DarkMode from './Components/darkMode/DarkMode'
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route, Link } from 'react-router-dom'
import LogInPage from './pages/LogInPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import ProfilePage from '../src/pages/ProfilePage'
import { useDispatch } from "react-redux"
import { getData } from './Components/store/slices/UserData';
import { auth } from '../FireBase';


function App() {

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
      let payload = user
      dispatch(getData(payload))
      localStorage.setItem("data", JSON.stringify(payload))



  })


  return (
    <>
      <div className='hidden'>
        <DarkMode />
      </div>
      <Routes>
        <Route path="/" element={
          <>
            <Link to={"/home"} >Home</Link>
            <Link to={"/login"} >LogIn</Link>
            <Link to={"/register"} >Register</Link>
          </>
        } />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App