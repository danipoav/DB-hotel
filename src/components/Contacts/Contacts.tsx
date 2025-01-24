import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import type { RootState, AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../store/thunks/contactThunk'
import Table from '../Generic/Table'

export default function Contacts() {

  const dispatch = useDispatch<AppDispatch>()
  const contacts = useSelector((state: RootState) => state.contact.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const filters = [
    { name: 'All Employee', active: true },
    { name: 'Active', active: false },
    { name: 'Inactive', active: false },
  ];

  const titles = [
    { key: 'job_desc', name: 'Job Desc', width: '350px' },
    { key: 'days', name: 'Schedule' },
    { key: 'phone', name: 'Contact' },
    { key: 'status', name: 'Status' },
  ]

  return (
    <>
      <HeaderTable title='Contact' onCreate={null} filters={filters}>
        <Table titles={titles} datas={contacts} actions={null} />
      </HeaderTable>
    </>
  )
}
