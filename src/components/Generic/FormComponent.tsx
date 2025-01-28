import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckoutButton, Form, FormWrapper, InputField, Label, Title, Select } from '../../styles/Generic/FormComponent.styles'
import { createBooking } from '../../store/thunks/bookingThunk'
import { useDispatch } from 'react-redux'
import { BookingType } from '../../interfaces/BookingType'
import type { AppDispatch } from '../../store/store'

export default function FormComponent() {
    const location = useLocation()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { data } = location.state || {}
    const [formValues, setFormValues] = useState<BookingType>(
        Object.fromEntries(data.map((field) => [field.db, ""])) as BookingType
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handlePost = (e) => {
        
        navigate('/home/bookings')
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
                                <Select name={field.db} onChange={handleChange}>
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
