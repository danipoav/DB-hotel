import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import type { RootState, AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../store/thunks/contactThunk'
import Table from '../Generic/Table'
import { useNavigate } from 'react-router-dom'

export default function Contacts() {

  const dispatch = useDispatch<AppDispatch>()
  const contacts = useSelector((state: RootState) => state.contact.contacts)
  const loading = useSelector((state: RootState) => state.contact.loading)
  const navigate = useNavigate()

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

  const createNewContact = () => {
    navigate('create', {
      state: {
        data: [
          { label: 'Name', db: 'name', type: 'text', placeholder: 'Enter your name' },
          { label: 'Join Date', db: 'join_date', type: 'date', placeholder: '01/23' },
          { label: 'Job Description', db: 'job_desc', type: 'text', placeholder: 'Direct' },
          { label: 'Phone', db: 'phone', type: 'number', placeholder: '611111111' },
          { label: 'Days', db: 'days', type: 'select', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
          { label: 'Status', db: 'status', type: 'select', options: ['Active', 'Inactive'] },
          { label: 'Photo', db: 'photo', type: 'select', options: ['/assets/bookings/booking1.jpg', 'https://randomuser.me/api/portraits/men/28.jpg', 'https://randomuser.me/api/portraits/men/30.jpg', 'https://randomuser.me/api/portraits/men/37.jpg'] },
        ],
        newLocation: 'contacts'
      }
    })
  }

  return (
    <>
      <HeaderTable title='Contact' onCreate={() => createNewContact()} filters={filters}>
        <Table titles={titles} datas={contacts} actions={null} loading={loading} />
      </HeaderTable>
    </>
  )
}
