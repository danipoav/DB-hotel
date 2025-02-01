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
        Object.fromEntries(data.map((field) => [field.db, field.type === 'select' ? field.options[0] : ""]))
    )

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
