import React from 'react'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginUserPage from './pages/LoginUserPage'
import RegisterUserPage from './pages/RegisterUserPage'
import  UserProfilePage from './pages/UserProfile'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>

      <Route path='/' element={<MainLayout/>}>

      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LoginUserPage />}/>
      <Route path='/register' element={<RegisterUserPage />}/>
      <Route path='/profile' element={<UserProfilePage />}/>

      </Route>
      
    </Routes>


      
    
  )
}

export default App
