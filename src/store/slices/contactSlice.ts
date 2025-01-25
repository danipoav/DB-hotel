import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts, fetchContact, unFetchContact, createContact, updatedContact, deleteContact } from "../thunks/contactThunk";
import { ContactTypeID } from "../../interfaces/ContactType"

interface ContactState {
    contacts: ContactTypeID[];
    contact: ContactTypeID | null;
    loading: boolean
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: <ContactState>{
        contacts: [],
        contact: null,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<ContactTypeID[]>) => {
                state.contacts = action.payload;
                state.loading = false
            })
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
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