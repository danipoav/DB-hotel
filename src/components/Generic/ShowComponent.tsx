import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useLocation } from 'react-router-dom'
import { CheckoutButton, Form, FormWrapper, InputField, Label, Title, Select } from '../../styles/Generic/FormComponent.styles'


export default function ShowComponent() {
    const location = useLocation()
    const { stateName } = location.state;
    const data = useSelector((state: RootState) => {
        switch (stateName) {
            case 'Bookings':
                return state.booking.booking;
            case 'Rooms':
                return state.room.room;
            case 'Contacts':
                return state.contact.contact;
            case 'Users':
                return state.user.user;
            default:
                return null;
        }
    })

    console.log(data)
    return (
        <FormWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clipRule="evenodd" /></svg>
            <Form >
                {data?.id}
            </Form>
        </FormWrapper>
    )
}
