import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { useNavigate } from 'react-router-dom';
import { updatedRoom } from '../../store/thunks/roomThunk';
import { CancelButton, Image, ImageDetails, InputField, SaveButton, SelectField, ShowContainer, ShowWrapper } from '../../styles/Generic/ShowComponent.styles';

const imageOptions = [
  "/assets/bookings/booking1.jpg",
  "/assets/bookings/booking2.jpg",
  "/assets/bookings/booking3.jpg",
  "/assets/bookings/booking4.jpg",
];

export default function ShowRoom() {

  const dispatch = useDispatch<AppDispatch>()
  const room = useSelector((state: RootState) => state.room.room);
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: room?.name || "",
    bed_type: room?.bed_type || "",
    room_number: room?.room_number || "",
    facilities: room?.facilities || "",
    price: room?.price || 0,
    status: room?.status || "",
    photo: room?.photo || imageOptions[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] })
  };

  const handleSave = () => {
    if (room?.id) {
      dispatch(updatedRoom({ id: room.id, ...formData }));
      setIsEditing(false)
      navigate('/home/rooms');
    }
  }

  useEffect(() => {
    if (room) {
      setFormData({
        name: room?.name || "",
        bed_type: room?.bed_type || "",
        room_number: room?.room_number || "",
        facilities: room?.facilities || "",
        price: room?.price || 0,
        status: room?.status || "",
        photo: room?.photo || imageOptions[0],
      });
    }
  }, [room]);

  return (
    <ShowWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/home/rooms')} width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clipRule="evenodd" /></svg>
      <ShowContainer>
        {room ? (
          <>
            <Image src={formData.photo} alt={room.name || "Imagen de la reserva"} />
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
                  <SelectField name='days' value={room.bed_type} onChange={handleChange}>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Bed">Double Bed</option>
                  </SelectField>
                  <InputField type="text" name="room_number" value={formData.room_number} onChange={handleChange} />
                  <InputField type="tel" name="facilities" value={formData.facilities} onChange={handleChange} />
                  <InputField type="tel" name="price" value={formData.price} onChange={handleChange} />
                  <SelectField name='status' value={formData.status} onChange={handleChange}>
                    <option value="Available">Available</option>
                    <option value="Booked">Booked</option>
                  </SelectField>
                </>
              ) : (
                <>
                  <p><strong>Name:</strong> {room.name}</p>
                  <p><strong>Bed Type:</strong> {room.bed_type}</p>
                  <p><strong>Room Number:</strong> {room.room_number}</p>
                  <p><strong>Facilities:</strong> {room.facilities}</p>
                  <p><strong>Price:</strong> {room.price}</p>
                  <p><strong>Status:</strong> {room.status}</p>
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
