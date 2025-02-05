import React, { useEffect } from 'react'
import SlideBar from './Slidebar'
import { Body, ContainerContent } from '../../styles/Dashboard/Content.styles'
import TopBar from './Topbar'
import { Outlet, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { setToastBoolean } from '../../store/slices/authSlice'
import Overview from '../Overview/Overview'

export default function Content() {
    const location = useLocation();
    const path = location.pathname === '/home';
    const dispatch = useDispatch<AppDispatch>();
    const { token, toastBoolean } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        // if (token && !toastBoolean) {
        //     toast.success('Welcome!', {
        //         position: "top-right",
        //         autoClose: 2500,
        //         hideProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     })
        //     dispatch(setToastBoolean(true))
        // }
    })

    return (
        <>
            <Body>
                <SlideBar />
                <ContainerContent>
                    <TopBar />
                    {path && (
                        <Overview />
                    )}
                    <Outlet />
                    <ToastContainer />
                </ContainerContent>
            </Body>
        </>
    )
}
