import React from 'react'
import HeaderTable from '../Generic/HeaderTable'

export default function Users() {
  const filters = [
    { name: 'All Users', active: true },
    { name: 'Pending Users', active: false },
    { name: 'Booked Users', active: false },
    { name: 'Canceled Users', active: false },
    { name: 'Refund Users', active: false },
    ]
  
    return (
      <>
        <HeaderTable title='User' onCreate={null} filters={filters}>
          Hola
        </HeaderTable>
      </>
    )
}
