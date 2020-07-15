import React, { Component, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import shortid from "shortid";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
    filter: "",
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };
  submitHandler = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    const singleContact = {
      name,
      number,
      id: shortid.generate(),
    };
    console.log(singleContact);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, singleContact],
    }));
  };

  //   deleteContact = (id) => {
  //     this.setState((prev) => ({
  //       contacts: prev.contacts.filter((contact) => contact.id !== id),
  //     }));
  //   };

  render() {
    const { name, number, contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          inputHandler={this.inputHandler}
          submitHandler={this.submitHandler}
          addContact={this.addContact}
          name={name}
          number={number}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} inputHandler={this.inputHandler} />
        <ContactList
          //   deleteContact={this.deleteContact}
          contacts={contacts}
        />
      </div>
    );
  }
}
export default Phonebook;

// const App = () => {
//   const [contacts, setContacts] = contacts([
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ]);
//   const [filter, setFilter] = filter("");
//   const [name, setName] = name("");
//   const [number, setNumber] = number("");

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm getData={getData} />

//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };
// export default App;
