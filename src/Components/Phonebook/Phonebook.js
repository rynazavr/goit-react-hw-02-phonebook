import React, { Component, useState, cloneElement } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import shortid from "shortid";

class Phonebook extends Component {
  formInitialState = {
    name: "",
    number: "",
    filter: "",
  };
  state = {
    name: "",
    number: "",
    filter: "",
    contacts: [
      { id: shortid.generate(), name: "Rosie Simpson", number: "459-12-56" },
      { id: shortid.generate(), name: "Hermione Kline", number: "443-89-12" },
      { id: shortid.generate(), name: "Eden Clements", number: "645-17-79" },
      { id: shortid.generate(), name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const result = this.state.contacts.some(
      (contact) => contact.name === this.state.name
    );
    if (!result) {
      const singleContact = {
        name,
        number,
        id: shortid.generate(),
      };
      console.log(singleContact);

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, singleContact],
      }));
      this.setState({ ...this.formInitialState });
    } else {
      alert(`${name} is already in list`);
    }

    console.log("result", result);
  };

  deleteContact = (event) => {
    const id = event.target.id;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  getContacts = () => {
    if (this.state.filter !== "") {
      return this.state.contacts.filter((contact) => {
        return contact.name
          .toLocaleLowerCase()
          .includes(this.state.filter.toLocaleLowerCase());
      });
    } else return this.state.contacts;
  };
  // checkContacts = (event) => {
  //   const inputName = event.target.name;
  //   if (this.state.contacts.name === inputName) {
  //     alert("{inputName} is already in list");
  //   }
  // };
  render() {
    const { name, number, filter } = this.state;
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
          deleteContact={this.deleteContact}
          contacts={this.getContacts()}
        />
      </div>
    );
  }
}
export default Phonebook;
