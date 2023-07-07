import React, { Component } from "react";
import { Container, Button } from "./Form.styled";

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handelInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { addNewContact } = this.props;
    addNewContact({...this.state});
    
      this.reset();
    };

    reset = () => {
      this.setState({ name: '', number: '' });
    }
    
  render() {
    return (
      <Container onSubmit={this.handelSubmit}>
        <label>
          Name
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
        </label>

        <label>
          Number
          <input
            onChange={this.handleImputChange}
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="000-00-00"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button disabled={!this.state.name || !this.state.number}>
          Add new contact
        </Button>
      </Container>
    );
  }
}

export default Form;