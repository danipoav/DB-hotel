import React from 'react'
import SlideBar from './SlideBar'
import { Body, ContainerContent } from '../../styles/Dashboard/Content.styles'
import TopBar from './TopBar'
import { Outlet, useLocation } from 'react-router-dom'

export default function Content() {
    const location = useLocation();
    const path = location.pathname === '/home';
    console.log(location)
    return (
        <>
            <Body>
                <SlideBar />
                <ContainerContent>
                    <TopBar />
                    {path &&(
                        <div>
                            <h1>HOME</h1>
                        </div>
                    )}
                    <Outlet />
                </ContainerContent>
            </Body>
        </>
    )
}
