import React, { useEffect } from 'react'
import SlideBar from './Slidebar'
import { Body, ContainerContent } from '../../styles/Dashboard/Content.styles'
import TopBar from './TopBar'
import { Outlet, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'

export default function Content() {
    const location = useLocation();
    const path = location.pathname === '/home';
    const dispatch = useDispatch<AppDispatch>();
    const Auth = useSelector((state: RootState) => state.auth.token)

    useEffect(() => {
        toast.dark('asdasd')
    }, [Auth])

    return (
        <>
            <Body>
                <SlideBar />
                <ContainerContent>
                    <TopBar />
                    {path && (
                        <div>
                            <h1>HOME</h1>
                        </div>
                    )}
                    <Outlet />
                    <ToastContainer />
                </ContainerContent>
            </Body>
        </>
    )
}
