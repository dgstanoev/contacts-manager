import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Melinda Brown',
        email: 'mbrown@gmail.com',
        phone: '777-777-7777',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Peter Jackson',
        email: 'pjackson@gmail.com',
        phone: '555-555-5555',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Nigel Dockins',
        email: 'ndockins@gmail.com',
        phone: '555-555-5555',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
