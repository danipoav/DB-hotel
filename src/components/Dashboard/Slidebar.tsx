import React from 'react'
import { LogoContainer, SlideContent, OptionList, OptionContainer, LogoutContainer } from '../../styles/Dashboard/Slidebar.styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'

export default function SlideBar() {

    const dispatch = useDispatch();

    return (
        <SlideContent>
            <LogoContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0h448c17.7 0 32 14.3 32 32s-14.3 32-32 32v384c17.7 0 32 14.3 32 32s-14.3 32-32 32H304v-48c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32m96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m-240 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-40 192c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8z" /></svg>
            </LogoContainer>

            <OptionList>
                <OptionContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"><path fill="currentColor" d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 1 1 4 4m4.86-4.62A3 3 0 0 0 15 2a3 3 0 0 0-2.12.88z" /></svg>
                </OptionContainer>
                <OptionContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M12 2h1.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5v-10A1.5 1.5 0 0 1 1.5 2H3V0h1v2h7V0h1zM6 8H3V7h3zm6-1H9v1h3zm-6 4H3v-1h3zm3 0h3v-1H9z" clipRule="evenodd" /></svg>
                </OptionContainer>
                <OptionContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3z" /></svg>
                </OptionContainer>
                <OptionContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 717 717"><path fill="currentColor" d="M0 179c0 30 11 63 25 98s32 68 46 93c38 66 87 131 143 185s122 99 196 126c43 17 86 36 134 36c24 0 58-9 89-22c30-13 57-33 67-57c4-9 9-21 12-35c3-13 5-26 5-35c0-5 0-10-1-11c-3-6-10-11-18-16c-18-9-21-12-48-28c-28-16-57-34-82-47c-12-7-20-10-23-10c-16 0-36 22-53 46c-18 24-38 46-52 46c-7 0-14-3-22-8s-16-9-21-12c-88-50-147-109-197-196c-6-10-20-31-20-42c0-13 18-28 36-44c17-15 35-33 35-55c0-3-2-12-6-25c-9-26-21-56-31-85c-5-14-9-24-10-29c-2-3-3-7-4-12s-3-9-4-13c-3-9-8-16-13-20c-5-2-17-5-29-6c-12 0-26-1-32-1c-3 0-7 0-11 1H98C66 15 43 43 26 76C10 109 0 146 0 179" /></svg>
                </OptionContainer>
            </OptionList>


            <LogoutContainer onClick={() => dispatch(logout())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4l5-4z" /></svg>
            </LogoutContainer>

        </SlideContent>
    )
}
