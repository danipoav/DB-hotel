import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { ShowWrapper, ShowContainer, Image, ImageDetails } from '../../styles/Generic/ShowComponent.styles';
import { useNavigate } from 'react-router-dom';

export default function ShowContact() {

    const booking = useSelector((state: RootState) => state.contact.contact);
    const navigate = useNavigate()


    return (
        <ShowWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/home/bookings')} width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clipRule="evenodd" /></svg>
            <ShowContainer>
                {booking ? (
                    <>
                        <Image src={booking.photo} alt={booking.name || "Imagen de la reserva"} />
                        <ImageDetails>
                            <p><strong>Name:</strong> {booking.name}</p>
                            <p><strong>Facilities:</strong> {booking.job_desc || "Ninguna"}</p>
                            <p><strong>Booking Date:</strong> {new Intl.DateTimeFormat('en-EN', { dateStyle: 'long' }).format(new Date(booking.join_date))}</p>
                            <p><strong>Check in:</strong> {booking.days}</p>
                            <p><strong>Check out:</strong> {new Intl.DateTimeFormat('en-EN', { dateStyle: 'long' }).format(new Date(booking.phone))}</p>
                            <p><strong>Status:</strong> {booking.status}</p>
                        </ImageDetails>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </ShowContainer>
        </ShowWrapper>
    )
}
