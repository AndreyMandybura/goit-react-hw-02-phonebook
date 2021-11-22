import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  addContact = ({name, number}) => {
    const Contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contacts.some(contact => contact.name.toLowerCase() === Contact.name.toLowerCase()) ||
      this.state.contacts.some(contact => contact.number === Contact.number)
    ) {
      alert(`${Contact.name} is already in contacts!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [Contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleContactFilter = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} value={this.statefilter} />
        <ContactList contacts={this.handleContactFilter()} onDeleteContact={this.deleteContact} />
      </div>
      );
  }
}

export default App;
