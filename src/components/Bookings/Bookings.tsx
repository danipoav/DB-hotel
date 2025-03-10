import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { fetchBookings, deleteBooking, fetchBooking } from '../../store/thunks/bookingThunk'
import Table from '../Generic/Table'
import { useNavigate } from 'react-router-dom'

export default function Bookings() {

  const dispatch = useDispatch<AppDispatch>();
  const bookings = useSelector((state: RootState) => state.booking.bookings)
  const loading = useSelector((state: RootState) => state.booking.loading)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchBookings())
  }, [dispatch])

  const filters = [
    { name: 'All Bookings', active: true },
    { name: 'Paid', active: false },
    { name: 'Pending', active: false },
    { name: 'Refunded', active: false },
  ]

  const titles = [
    { key: 'requests', name: 'Request' },
    { key: 'booking_date', name: 'Booking Date' },
    { key: 'check_in', name: 'Check In' },
    { key: 'check_out', name: 'Check Out' },
    { key: 'room', name: 'Room' },
    { key: 'price', name: 'Price' },
    { key: 'status', name: 'Status' },
  ]

  const createNewBooking = () => {
    navigate('create', {
      state: {
        data: [
          { label: "Name", db: 'name', type: "text", placeholder: "Enter booking name" },
          { label: "Room", db: 'room', type: "number", placeholder: "400" },
          { label: "Check In", db: 'check_in', type: "date", placeholder: "01/23" },
          { label: "Check Out", db: 'check_out', type: "date", placeholder: "01/23" },
          { label: "Request", db: 'requests', type: "text", placeholder: "Vetus torquis..." },
          { label: "Booking Date", db: 'booking_date', type: "date", placeholder: '01/23', read: 'readonly' },
          { label: "Price", db: 'price', type: "number", placeholder: '1000' },
          { label: "Status", db: 'status', type: "select", options: ["Paid", "Pending", "Refunded"] },
          { label: "Photo", db: 'photo', type: "select", options: ["/assets/bookings/booking1.jpg", "/assets/bookings/booking2.jpg", "/assets/bookings/booking3.jpg", "/assets/bookings/booking4.jpg"] },
        ],
        newLocation: 'bookings',
      },
    })
  }

  const actions = {
    remove: (id: string) => { dispatch(deleteBooking(id)) },
    view: (id: string) => { dispatch(fetchBooking(id)), navigate('show', { state: { stateName: 'Bookings' } }) }
  }

  return (
    <>
      <HeaderTable title='Booking' onCreate={() => createNewBooking()} filters={filters}>
        <Table titles={titles} datas={bookings} actions={actions} loading={loading} />
      </HeaderTable>
    </>
  )
}
