import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from './components/Login/LoginForm'
import { useEffect } from 'react'
import { initializeSession, logout } from './store/slices/authSlice'
import Content from './components/Dashboard/Content'

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
      } else {
        const timer = setTimeout(() => {
          dispatch(logout())
        }, time);
        return () => clearTimeout(timer)
      }
    }
  }, [expiration], [dispatch])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={isAuth ? <Navigate to="/home" replace /> : <LoginForm />} />
          <Route path='/home' element={isAuth ? <Content /> : <Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
