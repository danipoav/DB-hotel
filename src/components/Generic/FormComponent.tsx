import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckoutButton, Form, FormWrapper, InputField, Label, Title, Select } from '../../styles/Generic/FormComponent.styles'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store/store'
import { createBooking } from '../../store/thunks/bookingThunk'
import { createRoom } from '../../store/thunks/roomThunk'
import { createUser } from '../../store/thunks/userThunk'
import { createContact } from '../../store/thunks/contactThunk'



export default function FormComponent() {
    const location = useLocation()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { data, newLocation } = location.state || {}
    const [formValues, setFormValues] = useState<any>(
        Object.fromEntries(data.map((field) => [field.db, field.type === 'select' ? field.options[0] : "",]))
    )
    const currentDate = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    useEffect(() => {
        console.log(formValues)
    }, [formValues])

    const handlePost = (e) => {
        e.preventDefault()
        switch (newLocation) {
            case 'bookings':
                dispatch(createBooking(formValues))
                break;
            case 'rooms':
                dispatch(createRoom(formValues))
                break;
            case 'users':
                dispatch(createUser(formValues))
                break;
            case 'contacts':
                dispatch(createContact(formValues))
                break;

            default:
                break;
        }

        navigate(`/home/${newLocation}`)
    }

    return (
        <>

            <FormWrapper>
                <svg onClick={() => { navigate(`/home/${newLocation}`) }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clipRule="evenodd" /></svg>
                <Form onSubmit={handlePost}>
                    <title>Create </title>
                    {data.map((field, index) => (
                        <Label key={index} photo={field.label}>
                            <Title>{field.label}</Title>
                            {field.type === "select" ? (
                                <Select name={field.db} onChange={handleChange} defaultValue={field.options[0]}>
                                    {field.options.map((option, idx) => (
                                        <option key={idx} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Select>
                            ) : (
                                <InputField
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    name={field.db}
                                    onChange={handleChange}
                                    required
                                    min={field.db === 'check_in' ? currentDate : field.db === 'check_out' && formValues.check_in ? new Date(new Date(formValues.check_in).getTime() + 86400000).toISOString().split('T')[0] : undefined}
                                    max={field.db === 'booking_date' ? currentDate : undefined}
                                />
                            )}
                        </Label>
                    ))}
                    <CheckoutButton type="submit" value="Create" />
                </Form>
            </FormWrapper>
        </>
    )
}
