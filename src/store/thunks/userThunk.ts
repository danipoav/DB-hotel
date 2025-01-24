import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType, UserTypeID } from "../../interfaces/UserType";
import fetchAPI from "../../hooks/fetchAPI";

export const fetchUsers = createAsyncThunk<UserTypeID[]>('users/fetchUsers', async () => {
  try {
    const users = await fetchAPI('users', {
      method: 'GET'
    })
    if (users) {
      return users;
    } else {
      throw new Error('Error getting all users')
    }
  } catch (error) {
    throw error;
  }
});

export const fetchUser = createAsyncThunk<UserTypeID, string>('users/fetchUser', async (id) => {
  try {
    const user = await fetchAPI(`users/${id}`, {
      method: 'GET'
    })
    if (user) {
      return user
    } else {
      throw new Error('Error getting one user')
    }
  } catch (error) {
    throw error;
  }
});

export const unFetchUser = createAsyncThunk<null>('users/unFetchUser', async () => {
  return null;
});

export const createUser = createAsyncThunk<UserTypeID[], Omit<UserType, 'id'>>('users/createUser', async (user: Omit<UserType, 'id'>) => {
  try {
    const users = await fetchAPI('users', {
      method: 'POST',
      body: JSON.stringify(user)
    })
    if (users) {
      return users
    } else {
      throw new Error('Error getting users from createUsers')
    }
  } catch (error) {
    throw error;
  }
});

export const updatedUser = createAsyncThunk<UserTypeID[], UserTypeID>('users/updateUser', async (user: UserTypeID) => {
  try {
    const users = await fetchAPI(`users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user)
    })
    if (users) {
      return users
    } else {
      throw new Error('Error getting users from updatedUser')
    }
  } catch (error) {
    throw error
  }
});

export const deleteUser = createAsyncThunk<UserTypeID[], string>('users/delete', async (id: string) => {
  try {
    const users = await fetchAPI(`users/${id}`, {
      method: 'DELETE'
    })
    if (users) {
      console.log(users)
      return users;
    } else {
      throw new Error('Error getting users from deleteUser')
    }
  } catch (error) {
    throw error;
  }
});
