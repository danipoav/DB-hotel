import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactType, ContactTypeID } from "../../interfaces/ContactType";
import fetchAPI from "../../hooks/fetchAPI";

export const fetchContacts = createAsyncThunk<ContactTypeID[]>(
    'contacts/fetchContacts',
    async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500))
            const contacts = fetchAPI('contacts', {
                method: 'GET'
            })
            if (contacts) {
                console.log(contacts);
                return contacts;
            } else {
                throw new Error('Error getting all contacts')
            }

        } catch (error) {
            console.log(error.message || 'Error getting all contacts')
            throw error;
        }
    });

export const fetchContact = createAsyncThunk<ContactTypeID, string>(
    'contacts/fetchContact',
    async (id) => {
        try {
            const contact = await fetchAPI(`contacts/${id}`, {
                method: 'GET'
            })
            if (contact) {
                return contact
            } else {
                throw new Error('Error getting one contact')
            }
        } catch (error) {
            throw error;
        }
    }
);

export const unFetchContact = createAsyncThunk<null>('contacts/unFetchContact', async () => null);

export const createContact = createAsyncThunk<ContactTypeID[], Omit<ContactType, 'id'>>(
    'contacts/createContact',
    async (contact) => {
        try {
            const contacts = await fetchAPI('contacts', {
                method: 'POST',
                body: JSON.stringify(contact)
            })
            if (contacts) {
                return contacts
            } else {
                throw new Error('Error getting contacts from Create Contact')
            }
        } catch (error) {
            throw error;
        }
    }
);

export const updatedContact = createAsyncThunk<ContactTypeID[], ContactTypeID>(
    'contacts/updateContact',
    async (contact) => {
        try {
            const contacts = await fetchAPI(`contacts/${contact.id}`, {
                method: 'PUT',
                body: JSON.stringify(contact)
            })
            if (contacts) {
                return contacts
            } else {
                throw new Error('Error getting contacts from Updated Contacts')
            }
        } catch (error) {
            throw error
        }
    }
);

export const deleteContact = createAsyncThunk<ContactTypeID[], string>(
    'contacts/delete',
    async (id) => {
        try {
            const contacts = await fetchAPI(`contacts/${id}`, {
                method: 'DELETE'
            })
            if (contacts) {
                return contacts;
            } else {
                throw new Error('Error getting contacts from delete Contact')
            }
        } catch (error) {
            throw error;
        }
    }
);
