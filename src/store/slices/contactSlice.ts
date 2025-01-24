import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts, fetchContact, unFetchContact, createContact, updatedContact, deleteContact } from "../thunks/contactThunk";
import { ContactTypeID } from "../../interfaces/ContactType"

interface ContactState {
    contacts: ContactTypeID[];
    contact: ContactTypeID | null;
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: <ContactState>{
        contacts: [],
        contact: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<ContactTypeID[]>) => {
                state.contacts = action.payload;
            })
            .addCase(fetchContact.fulfilled, (state, action: PayloadAction<ContactTypeID>) => {
                state.contact = action.payload
            })
            .addCase(unFetchContact.fulfilled, (state, action: PayloadAction<ContactTypeID | null>) => {
                state.contact = action.payload
            })
            .addCase(createContact.fulfilled, (state, action: PayloadAction<ContactTypeID[]>) => {
                state.contacts = action.payload
            })
            .addCase(updatedContact.fulfilled, (state, action: PayloadAction<ContactTypeID[]>) => {
                state.contacts = action.payload
            })
            .addCase(deleteContact.fulfilled, (state, action: PayloadAction<ContactTypeID[]>) => {
                state.contacts = action.payload
            })
    }
})

export default contactSlice.reducer;