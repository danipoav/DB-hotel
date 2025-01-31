import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from './components/Login/LoginForm'
import { useEffect, useState } from 'react'
import { initializeSession, logout } from './store/slices/authSlice'
import Content from './components/Dashboard/Content'
import Rooms from './components/Rooms/Rooms'
import Bookings from './components/Bookings/Bookings'
import Users from './components/Users/Users'
import Contacts from './components/Contacts/Contacts'
import FormComponent from './components/Generic/FormComponent'

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const expiration = useSelector((state) => state.auth.expiration)

  useEffect(() => {
    dispatch(initializeSession())
  }, [dispatch])

  useEffect(() => {
    if (expiration) {
      const time = expiration - Date.now()

      if (time <= 0) {
        dispatch(logout())
        localStorage.removeItem('Auth')
      } else {
        const timer = setTimeout(() => {
          dispatch(logout())
          localStorage.removeItem('Auth')
        }, time);
        return () => clearTimeout(timer)
      }
    }
  }, [expiration], [dispatch])

  

  return (
    <>
      <Routes>

        <Route path='/' element={isAuth ? <Navigate to="/home" /> : <LoginForm />} />
        <Route path='/home' element={isAuth ? <Content /> : <Navigate to="/" />} >
          <Route path='rooms' element={<Rooms />}>

          </Route>
          <Route path='bookings' element={<Bookings />}>
            <Route path='create' element={<FormComponent />} />
          </Route>
          <Route path='users' element={<Users />}>

          </Route>
          <Route path='contacts' element={<Contacts />}>

          </Route>

        </Route>

      </Routes>
    </>
  )
}

export default App
