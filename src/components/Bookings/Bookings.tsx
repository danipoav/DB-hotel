import React from 'react'
import HeaderTable from '../Generic/HeaderTable'

export default function Bookings() {

  const filters = [
    { name: 'All Bookings', active: true },
    { name: 'Confirmed Bookings', active: false },
    { name: 'Pending Bookings', active: false },
    { name: 'Cancelled Bookings', active: false },
  ]

  return (
    <>
      <HeaderTable title='Booking' onCreate={null} filters={filters}>
        Hola
      </HeaderTable>
    </>
  )
}
