import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { updatedUser } from '../../store/thunks/userThunk';
import { CancelButton, Image, ImageDetails, InputField, SaveButton, SelectField, ShowContainer, ShowWrapper } from '../../styles/Generic/ShowComponent.styles';

const imageOptions = [
    "/assets/bookings/booking1.jpg",
    "/assets/bookings/booking2.jpg",
    "/assets/bookings/booking3.jpg",
    "/assets/bookings/booking4.jpg",
];

export default function ShowUser() {

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || "",
        order_date: user?.order_date || "",
        check_in: user?.check_in || "",
        check_out: user?.check_out || "",
        room_type: user?.room_type || "",
        status: user?.status || "",
        photo: user?.photo || imageOptions[0],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSave = () => {
        if (user?.id) {
            dispatch(updatedUser({ id: user.id, ...formData }))
            setIsEditing(false);
            navigate('/home/users')
        }
    }

    useEffect(() => {
        if (user) {
            setFormData({
                name: user?.name || "",
                order_date: user?.order_date || "",
                check_in: user?.check_in || "",
                check_out: user?.check_out || "",
                room_type: user?.room_type || "",
                status: user?.status || "",
                photo: user?.photo || imageOptions[0],
            })
        }
    }, [user])

    return (
        <ShowWrapper>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/home/contacts')} width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clipRule="evenodd" /></svg>
                    <ShowContainer>
                        {user ? (
                            <>
                                <Image src={formData.photo} alt={user.name || "Imagen de la reserva"} />
                                <ImageDetails>
                                    {isEditing ? (
                                        <>
                                            <label><strong>Foto:</strong></label>
                                            <SelectField name="photo" value={formData.photo} onChange={handleChange}>
                                                {imageOptions.map((url) => (
                                                    <option key={url} value={url}>
                                                        {url.split("/").pop()}
                                                    </option>
                                                ))}
                                            </SelectField>
        
                                            <InputField type="text" name="name" value={formData.name} onChange={handleChange} />
                                            <InputField type="date" name="order_date" value={formData.order_date} onChange={handleChange} />
                                            <InputField type="date" name="check_in" value={formData.check_in} onChange={handleChange} />
                                            <InputField type="date" name="check_out" value={formData.check_out} onChange={handleChange} />
                                            <SelectField name='room_type' value={user.room_type} onChange={handleChange}>
                                                <option value="Double Bed">Double Bed</option>
                                                <option value="Double Bed">Double Bed</option>
                                                <option value="Double Bed">Double Bed</option>
                                            </SelectField>
                                            <SelectField name='status' value={formData.status} onChange={handleChange}>
                                                <option value="Refunded">Refunded</option>
                                                <option value="Paid">Paid</option>
                                                <option value="Pending">Pending</option>
                                            </SelectField>
                                        </>
                                    ) : (
                                        <>
                                            <p><strong>Name:</strong> {user.name}</p>
                                            <p><strong>Order Date:</strong> {new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(new Date(user.order_date))}</p>
                                            <p><strong>Check In:</strong> {new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(new Date(user.check_in))}</p>
                                            <p><strong>Check Out:</strong> {new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(new Date(user.check_out))}</p>
                                            <p><strong>Room Type:</strong> {user.room_type}</p>
                                            <p><strong>Status:</strong> {user.status}</p>
                                        </>
                                    )}
                                </ImageDetails>
                                <SaveButton onClick={() => setIsEditing(!isEditing)}>
                                    {isEditing ? "Cancel" : "Edit"}
                                </SaveButton>
                                {isEditing && <CancelButton onClick={handleSave}>Save</CancelButton>}
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </ShowContainer>
                </ShowWrapper>
    )
}
