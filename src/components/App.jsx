import { Component } from 'react';
import { nanoid } from 'nanoid';

import { PhoneForm } from './phoneForm/PhoneForm';
import { ContactList } from './contactList/ContactList';
import { FilterContact } from './filterContact/FilterContact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = newContact => {
    const isexsist = this.state.contacts.find(
      contactName =>
        contactName.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isexsist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  changeFilter = newfilter => {
    this.setState({ filter: newfilter });
  };

  getVisibleContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const visibeleItem = this.getVisibleContact();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
          alignItems: `flex-start`,
          padding: `35px`,
        }}
      >
        <h1>Phonebook</h1>
        <PhoneForm onAdd={this.addContacts} />
        <h2>Contacts</h2>
        <FilterContact
          filter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList items={visibeleItem} onDelete={this.deleteContact} />
      </div>
    );
  }
}
