import React from 'react'
import SlideBar from './SlideBar'
import { Body, ContainerContent } from '../../styles/Dashboard/Content.styles'
import TopBar from './TopBar'

export default function Content() {
    return (
        <>
            <Body>
                <SlideBar />
                <ContainerContent>
                    <TopBar />
                    saasas
                </ContainerContent>
            </Body>
        </>
    )
}
