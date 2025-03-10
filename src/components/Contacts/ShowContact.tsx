import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { ShowWrapper, ShowContainer, Image, ImageDetails, SelectField, InputField, SaveButton, CancelButton } from '../../styles/Generic/ShowComponent.styles';
import { useNavigate } from 'react-router-dom';
import { updatedContact } from '../../store/thunks/contactThunk'

const imageOptions = [
    "/assets/bookings/booking1.jpg",
    "/assets/bookings/booking2.jpg",
    "/assets/bookings/booking3.jpg",
    "/assets/bookings/booking4.jpg",
];

export default function ShowContact() {

    const dispatch = useDispatch<AppDispatch>();
    const contact = useSelector((state: RootState) => state.contact.contact);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: contact?.name || "",
        join_date: contact?.join_date || "",
        job_desc: contact?.job_desc || "",
        phone: contact?.phone || "",
        days: contact?.days || "",
        status: contact?.status || "",
        photo: contact?.photo || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: name === "phone" ? value.replace(/\D/g, '') : value
        }));
    };

    const handleSave = () => {
        if (contact?.id) {
            dispatch(updatedContact({ id: contact.id, ...formData, photo: 'https://thispersondoesnotexist.com/10' }));
            setIsEditing(false);
            navigate('/home/contacts');
        }
    };

    useEffect(() => {
        if (contact) {
            setFormData({
                name: contact?.name || "",
                join_date: contact?.join_date || "",
                job_desc: contact?.job_desc || "",
                phone: contact?.phone || "",
                days: contact?.days || "",
                status: contact?.status || "",
                photo: contact?.photo || imageOptions[0],
            });
        }
    }, [contact]);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.name === "phone" && !/^\d{9}$/.test(e.target.value)) {
            alert("El número de teléfono debe tener exactamente 9 dígitos.");
        }
    };

    return (
        <ShowWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/home/contacts')} width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clipRule="evenodd" /></svg>
            <ShowContainer>
                {contact ? (
                    <>
                        <Image src={formData.photo} alt={contact.name || "Imagen de la reserva"} />
                        <ImageDetails>
                            {isEditing ? (
                                <>
                                    <label><strong>Foto:</strong></label>
                                    {/* <SelectField name="photo" value={formData.photo} onChange={handleChange}>
                                        {imageOptions.map((url) => (
                                            <option key={url} value={url}>
                                                {url.split("/").pop()}
                                            </option>
                                        ))}
                                    </SelectField> */}

                                    <InputField type="text" name="name" value={formData.name} onChange={handleChange} />
                                    <InputField type="date" name="join_date" value={formData.join_date} onChange={handleChange} />
                                    <InputField type="text" name="job_desc" value={formData.job_desc} onChange={handleChange} />
                                    <InputField type="tel" pattern="[0-9]{9}" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
                                    <SelectField name='days' value={contact.days} onChange={handleChange}>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                    </SelectField>
                                    <SelectField name='status' value={formData.status} onChange={handleChange}>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </SelectField>
                                </>
                            ) : (
                                <>
                                    <p><strong>Name:</strong> {contact.name}</p>
                                    <p><strong>Join Date:</strong> {new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(new Date(contact.join_date))}</p>
                                    <p><strong>Job Description:</strong> {contact.job_desc || "Ninguna"}</p>
                                    <p><strong>Phone:</strong> {contact.phone}</p>
                                    <p><strong>Days:</strong> {contact.days}</p>
                                    <p><strong>Status:</strong> {contact.status}</p>
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
