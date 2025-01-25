import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import type { RootState, AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/thunks/userThunk'
import Table from '../Generic/Table'

export default function Users() {

  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state: RootState) => state.user.users)
  const loading = useSelector((state: RootState) => state.user.loading)

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

  return (
    <>
      <HeaderTable title='User' onCreate={null} filters={filters}>
        <Table titles={titles} datas={users} actions={null} loading={loading} />
      </HeaderTable>
    </>
  )
}
