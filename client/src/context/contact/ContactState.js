import { useReducer } from 'react';
import uuid from 'uuid';
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
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
