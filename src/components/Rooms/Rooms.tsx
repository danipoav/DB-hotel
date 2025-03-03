import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import type { RootState, AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRoom, fetchRoom, fetchRooms } from '../../store/thunks/roomThunk'
import Table from '../Generic/Table'
import { useNavigate } from 'react-router-dom'

export default function Rooms() {

  const dispatch = useDispatch<AppDispatch>()
  const rooms = useSelector((state: RootState) => state.room.rooms)
  const loading = useSelector((state: RootState) => state.room.loading)
  const navigate = useNavigate();

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

  const createNewRoom = () => {
    navigate('create', {
      state: {
        data: [
          { label: 'Name', db: 'name', type: 'text', placeholder: 'Enter room name' },
          { label: 'Bed Type', db: 'bed_type', type: 'select', options: ['Double Bed', 'Suite', 'Double Superior', 'Single Bed'] },
          { label: 'Room', db: 'room_number', type: 'number', placeholder: '200...' },
          { label: 'Facilities', db: 'facilities', type: 'text', placeholder: 'Natus quae callide...' },
          { label: 'Price', db: 'price', type: 'number', placeholder: '2800' },
          { label: 'Status', db: 'status', type: 'select', options: ['Booked', 'Available'] },
          { label: 'Photo', db: 'photo', type: 'select', options: ['/assets/rooms/room1.jpg', '/assets/rooms/room2.jpg', '/assets/rooms/room3.jpg', '/assets/rooms/room4.jpg'] },
        ],
        newLocation: 'rooms'
      }
    })
  }

  const actions = {
    remove: (id: string) => { dispatch(deleteRoom(id)) },
    view: (id: string) => { dispatch(fetchRoom(id)), navigate('show', { state: { stateName: 'Rooms' } }) }
  }

  return (
    <>
      <HeaderTable title='Room' onCreate={() => createNewRoom()} filters={filters}>
        <Table titles={titles} datas={rooms} actions={actions} loading={loading} />
      </HeaderTable>
    </>
  )
}
