import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import type { RootState, AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from '../../store/thunks/roomThunk'
import Table from '../Generic/Table'

export default function Rooms() {

  const dispatch = useDispatch<AppDispatch>()
  const rooms = useSelector((state: RootState) => state.room.rooms)
  const loading = useSelector((state: RootState) => state.room.loading)

  useEffect(() => {
    dispatch(fetchRooms())
  }, [dispatch])

  const filters = [
    { name: 'All Rooms', active: true },
    { name: 'Available', active: false },
    { name: 'Booked', active: false },
  ];

  const titles = [
    { key: 'bed_type', name: 'Bed Type' },
    { key: 'room_number', name: 'Room Number' },
    { key: 'facilities', name: 'Facilities' },
    { key: 'price', name: 'Rate' },
    { key: 'status', name: 'Status' },
  ];

  return (
    <>
      <HeaderTable title='Room' onCreate={null} filters={filters}>
        <Table titles={titles} datas={rooms} actions={null} loading={loading} />
      </HeaderTable>
    </>
  )
}
