import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { fetchBookings } from '../../store/thunks/bookingThunk'
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

  const createBooking = () => {
    navigate('create', {
      state: {
        data: [
          { label: "Name", type: "text", placeholder: "Enter your name" },
          { label: "Room", type: "number", placeholder: "400" },
          { label: "Check In", type: "date", placeholder: "01/23" },
          { label: "Check Out", type: "date", placeholder: "01/23" },
          { label: "Request", type: "text", placeholder: "Vetus torqueo cura anser exercitationem accusator videlicet." },
          { label: "Booking Date", type: "date", placeholder:'01/23' },
          { label: "Price", type: "number", placeholder:'1000' },
          { label: "Status", type: "select", options: ["Paid", "Pending", "Refunded"] },
        ]
      }
    })
  }

  return (
    <>
      <HeaderTable title='Booking' onCreate={() => createBooking()} filters={filters}>
        <Table titles={titles} datas={bookings} actions={null} loading={loading} />
      </HeaderTable>
    </>
  )
}
