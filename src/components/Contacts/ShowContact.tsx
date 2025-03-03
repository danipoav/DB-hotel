import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { ShowWrapper, ShowContainer, Image, ImageDetails } from '../../styles/Generic/ShowComponent.styles';
import { useNavigate } from 'react-router-dom';
import { updatedContact } from '../../store/thunks/contactThunk'

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (contact?.id) {
            dispatch(updatedContact({ id: contact.id, ...formData }));
            setIsEditing(false);
            navigate('/home/contacts');
        }
    };

    return (
        <ShowWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/home/bookings')} width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clipRule="evenodd" /></svg>
            <ShowContainer>

            </ShowContainer>
        </ShowWrapper>
    )
}
