import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTable from '../Generic/HeaderTable'

export default function Rooms() {
  const filters = [
    { name: 'All Rooms', active: true },
    { name: 'Active Rooms', active: false },
    { name: 'Inactive Rooms', active: false },
    ]
  
    return (
      <>
        <HeaderTable title='Room' onCreate={null} filters={filters}>
          Hola
        </HeaderTable>
      </>
    )
}
