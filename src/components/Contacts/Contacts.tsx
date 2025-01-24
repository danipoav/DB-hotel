import React from 'react'
import HeaderTable from '../Generic/HeaderTable'

export default function Contacts() {
  const filters = [
    { name: 'All Employee', active: true },
    { name: 'Active Employee', active: false },
    { name: 'Inactive Employee', active: false },
    ]
  
    return (
      <>
        <HeaderTable title='Contact' onCreate={null} filters={filters}>
          Hola
        </HeaderTable>
      </>
    )
}
