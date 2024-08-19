import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { updateFilter } from '../redux/contactsSlice';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import {
  selectContacts,
  selectFilter,
  selectContactsIsLoading,
  selectContactsError,
} from '../redux/selectors';

import styles from './App.module.css';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleChangeFilter = event => {
    dispatch(updateFilter(event.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      {isLoading && <p>Loading...</p>}
      {error && console.log(`${error}`)}
      {contacts.length === 0 && <p>No contacts available.</p>}
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
