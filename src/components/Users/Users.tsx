import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import type { RootState, AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchUser, fetchUsers } from '../../store/thunks/userThunk'
import Table from '../Generic/Table'
import { useNavigate } from 'react-router-dom'

export default function Users() {

  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state: RootState) => state.user.users)
  const loading = useSelector((state: RootState) => state.user.loading)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const filters = [
    { name: 'All Users', active: true },
    { name: 'Paid', active: false },
    { name: 'Pending', active: false },
    { name: 'Refunded', active: false },
  ]

  const titles = [
    { key: 'order_date', name: 'Order Date' },
    { key: 'check_in', name: 'Check In' },
    { key: 'check_out', name: 'Check Out' },
    { key: 'room_type', name: 'Room Type' },
    { key: 'status', name: 'Status' },
  ];

  const createNewUser = () => {
    navigate('create', {
      state: {
        data: [
          { label: 'Name', db: 'name', type: 'text', placeholder: 'Enter your name' },
          { label: 'Order Date', db: 'order_date', type: 'date', placeholder: '01/23' },
          { label: 'Check In', db: 'check_in', type: 'date', placeholder: '01/23' },
          { label: 'Check Out', db: 'check_out', type: 'date', placeholder: '01/23' },
          { label: 'Room Type', db: 'room_type', type: 'select', options: ['Deluxe A-7', 'Deluxe A-25', 'Deluxe A-54', 'Deluxe A-18'] },
          { label: 'Status', db: 'status', type: 'select', options: ['Paid', 'Pending', 'Refunded'] },
          { label: 'Photo', db: 'photo', type: 'select', options: ['/assets/bookings/booking1.jpg', 'https://randomuser.me/api/portraits/men/18.jpg', 'https://randomuser.me/api/portraits/men/20.jpg', 'https://randomuser.me/api/portraits/men/22.jpg'] },
        ],
        newLocation: 'users'
      }
    })
  }

  const actions = {
    remove: (id: string) => { dispatch(deleteUser(id)) },
    view: (id: string) => { dispatch(fetchUser(id)), navigate('show', { state: { stateName: 'Users' } }) }
  }

  return (
    <>
      <HeaderTable title='User' onCreate={() => createNewUser()} filters={filters}>
        <Table titles={titles} datas={users} actions={actions} loading={loading} />
      </HeaderTable>
    </>
  )
}
