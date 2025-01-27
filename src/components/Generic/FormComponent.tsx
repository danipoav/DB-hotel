import React from 'react'
import { useLocation } from 'react-router-dom'
import { CheckoutButton, Form, FormWrapper, InputField, Label, Title } from '../../styles/Generic/FormComponent.styles'

export default function FormComponent() {
    const location = useLocation()
    const { data } = location.state || {}
    console.log(data)

    const submit = () =>{

    }

    return (
        <>
            <FormWrapper>
                <Form onSubmit={submit}>
                    {data.map((field, index) => (
                        <Label key={index}>
                            <Title>{field.label}</Title>
                            {field.type === "select" ? (
                                <select>
                                    {field.options.map((option, idx) => (
                                        <option key={idx} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <InputField
                                    type={field.type}
                                    placeholder={field.placeholder}
                                />
                            )}
                        </Label>
                    ))}
                    <CheckoutButton type="button" value="Checkout" />
                </Form>
            </FormWrapper>
        </>
    )
}
