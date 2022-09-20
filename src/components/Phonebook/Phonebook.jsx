import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from './Phonebook.module.css';

const { wrapper } = css;

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isDuplicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    return result;
  }

  addContact = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    this.setState(prevState => {
      const newContact = { id: nanoid(), ...contact };
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalisedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalisedName = name.toLocaleLowerCase();
      const result =
        normalisedName.includes(normalisedFilter) ||
        number.includes(normalisedFilter);
      console.log(result);
      return result;
    });
    return filteredContacts;
  }

  render() {
    const { addContact, handleChange, removeContact } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <div className={wrapper}>
        <h1
          style={{
            marginBottom: 15,
          }}
        >
          Phonebook
        </h1>
        <ContactForm onSubmit={addContact} />
        <h2
          style={{
            marginBottom: 15,
          }}
        >
          Contacts
        </h2>
        <Filter
          title="Find contacts by name"
          value={filter}
          onChange={handleChange}
        />
        <ContactList items={contacts} removeContact={removeContact} />
      </div>
    );
  }
}

export default Phonebook;
