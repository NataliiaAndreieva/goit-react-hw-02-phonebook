import React, { Component } from "react";
import { nanoid } from 'nanoid'

import Form from "./Form";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = data => {
    const { contacts } = this.state;
    const contactExist = contacts.some(
      ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );

    if (contactExist) return alert(`${data.name} is alredy in contacts`);

    const newContact = { id: nanoid(), ...data };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    
  };
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <Form addNewContact={this.addNewContact } />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Container>
      </>
    );
  }
};

export default App;
