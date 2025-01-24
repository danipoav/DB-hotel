import React from 'react'
import { TopContainer, TopTitle } from '../../styles/Dashboard/Topbar'
import { useLocation } from 'react-router-dom'

export default function TopBar() {
  const location = useLocation()

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/home':
        return 'Dashboard'
      case '/home/bookings':
        return 'Bookings'
      case '/home/rooms':
        return 'Rooms'
      case '/home/users':
        return 'Users'
      case '/home/contacts':
        return 'Contacts'
      default: 'Dashboard'
        break;
    }
  }
  return (
    <TopContainer>
      <TopTitle>{getTitle(location.pathname)}</TopTitle>
    </TopContainer>
  )
}
