import React, { useEffect } from 'react'
import HeaderTable from '../Generic/HeaderTable'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { fetchBookings } from '../../store/thunks/bookingThunk'
import Table from '../Generic/Table'
import { LoaderText, Loader, Load, LoadingContainer } from '../../styles/Generic/HeaderTable.styles'

export default function Bookings() {

  const dispatch = useDispatch<AppDispatch>();
  const bookings = useSelector((state: RootState) => state.booking.bookings)
  const loading = useSelector((state: RootState) => state.booking.loading)

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

  return (
    <>
      <HeaderTable title='Booking' onCreate={null} filters={filters}>
        <Table titles={titles} datas={bookings} actions={null} loading={loading} />
      </HeaderTable>
    </>
  )
}
