import React from 'react'
import { TopContainer, TopTitle } from '../../styles/Dashboard/Topbar'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import photo from '../../assets/DPFounder.png';

export default function TopBar() {
  const location = useLocation()
  const name = useSelector((state: RootState) => state.auth.name);

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/home':
        return 'Overview'
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
      <div>
        <img src={photo} alt="Profile" width={50} height={50}/>
        <p>{name}</p>
      </div>
    </TopContainer>
  )
}
