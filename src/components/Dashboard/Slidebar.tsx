import React from 'react'
import { LogoContainer, SlideContent, OptionList, OptionContainer, LogoutContainer } from '../../styles/Dashboard/Slidebar.styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'
import { useLocation } from 'react-router-dom'

export default function SlideBar() {
    const dispatch = useDispatch();
    const location = useLocation()

    return (
        <SlideContent>
            <LogoContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 22v-6.57M12 11h.01M12 7h.01M14 15.43V22m1-6a5 5 0 0 0-6 0m7-5h.01M16 7h.01M8 11h.01M8 7h.01" /><rect width="16" height="20" x="4" y="2" rx="2" /></g></svg>
            </LogoContainer>

            <OptionList>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <OptionContainer active={location.pathname === '/home'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h9v7H2zm2 2v3h5V4zm9-2h9v11h-9zm2 2v7h5V4zM2 11h9v11H2zm2 2v7h5v-7zm9 2h9v7h-9zm2 2v3h5v-3z" /></svg>
                    </OptionContainer>
                </Link>
                <Link to="/home/rooms" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <OptionContainer active={location.pathname === '/home/rooms'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 0 1 2 2m4 0a6 6 0 0 1-7.743 5.743L11 17H9v2H7v2H4a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l5.964-5.964A6 6 0 1 1 21 9" /></svg>
                    </OptionContainer>
                </Link>
                <Link to="/home/bookings" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <OptionContainer active={location.pathname === '/home/bookings'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M3.5 0v5m8-5v5M3 7.5h3m6 0H9m-6 3h3m3 0h3m-10.5-8h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z" /></svg>
                    </OptionContainer>
                </Link>
                <Link to="/home/users" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <OptionContainer active={location.pathname === '/home/users'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></g></svg>
                    </OptionContainer>
                </Link>
                <Link to="/home/contacts" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <OptionContainer active={location.pathname === '/home/contacts'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047c.42 2.783 1.66 7.83 5.283 11.453c3.805 3.805 9.286 5.456 12.302 6.113c1.165.253 2.198-.655 2.198-1.848v-3.584z" /></svg>
                    </OptionContainer>
                </Link>
            </OptionList>


            <LogoutContainer onClick={() => dispatch(logout())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4l5-4z" /></svg>
            </LogoutContainer>

        </SlideContent>
    )
}
