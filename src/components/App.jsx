import React, { Component } from "react";
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handelInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  }

  handelSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  }

  render() { 

  return (
    <form onSubmit={this.handelSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={this.state.name}
        onChange={this.handelInputChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
  
  }
};
