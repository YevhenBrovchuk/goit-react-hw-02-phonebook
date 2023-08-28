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
    if (this.state.filter) {
      const con = this.state.contacts.filter(
        contact =>
          contact.name &&
          contact.name.toLowerCase() &&
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
      console.log(con);
      return con;
    }
    return this.state.contacts;
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
          alignItems: 'center',
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