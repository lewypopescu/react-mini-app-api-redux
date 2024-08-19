import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsApi } from '../api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const response = await contactsApi.getAll();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const response = await contactsApi.post(contact);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkApi) => {
    try {
      await contactsApi.delete(contactID);
      return { id: contactID };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
