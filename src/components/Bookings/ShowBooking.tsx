import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import {
    ShowWrapper,
    ShowContainer,
    Image,
    ImageDetails,
    InputField,
    SelectField,
    SaveButton,
    CancelButton
} from "../../styles/Generic/ShowComponent.styles";
import { useNavigate } from "react-router-dom";
import { editBooking } from "../../store/thunks/bookingThunk";

const imageOptions = [
    "/assets/bookings/booking1.jpg",
    "/assets/bookings/booking2.jpg",
    "/assets/bookings/booking3.jpg",
    "/assets/bookings/booking4.jpg",
];

export default function ShowBooking() {
    const dispatch = useDispatch<AppDispatch>();
    const booking = useSelector((state: RootState) => state.booking.booking);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: booking?.name || "",
        requests: booking?.requests || "",
        booking_date: booking?.booking_date || "",
        check_in: booking?.check_in || "",
        check_out: booking?.check_out || "",
        room: booking?.room || 0,
        price: booking?.price || 0,
        status: booking?.status || "Refunded",
        photo: booking?.photo || imageOptions[0],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (booking?.id) {
            dispatch(editBooking({ id: booking.id, ...formData }));
            setIsEditing(false);
            navigate('/home/bookings');
        }
    };

    useEffect(() => {
        if (booking) {
            setFormData({
                name: booking.name || "",
                requests: booking.requests || "",
                booking_date: booking.booking_date || "",
                check_in: booking.check_in || "",
                check_out: booking.check_out || "",
                room: booking.room || 0,
                price: booking.price || 0,
                status: booking.status || "Paid",
                photo: booking.photo || imageOptions[0],
            });
        }
    }, [booking]);

    return (
        <ShowWrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => navigate("/home/bookings")}
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z"
                    clipRule="evenodd"
                />
            </svg>
            <ShowContainer>
                {booking ? (
                    <>
                        <Image src={formData.photo} alt={booking.name || "Imagen de la reserva"} />
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
                                    <InputField type="text" name="requests" value={formData.requests} onChange={handleChange} />
                                    <InputField type="date" name="booking_date" value={formData.booking_date} onChange={handleChange} />
                                    <InputField type="date" name="check_in" value={formData.check_in} onChange={handleChange} />
                                    <InputField type="date" name="check_out" value={formData.check_out} onChange={handleChange} />
                                    <InputField type="number" name="room" value={formData.room} onChange={handleChange} />
                                    <InputField type="number" name="price" value={formData.price} onChange={handleChange} />
                                    <InputField type="text" name="status" value={formData.status} onChange={handleChange} />
                                </>
                            ) : (
                                <>
                                    <p><strong>Name:</strong> {booking.name}</p>
                                    <p><strong>Facilities:</strong> {booking.requests || "Ninguna"}</p>
                                    <p><strong>Booking Date:</strong> {new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(new Date(booking.booking_date))}</p>
                                    <p><strong>Check in:</strong> {new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(new Date(booking.check_in))}</p>
                                    <p><strong>Check out:</strong> {new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(new Date(booking.check_out))}</p>
                                    <p><strong>Room:</strong> {booking.room}</p>
                                    <p><strong>Price:</strong> ${booking.price}</p>
                                    <p><strong>Status:</strong> {booking.status}</p>
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
    );
}
