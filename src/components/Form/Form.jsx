import React, { Component } from "react";
import { Container, Button } from "./Form.styled";

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
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
      <Container onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          {/* <button type="submit">Add contact</button> */}
        </label>

        <label>
          Number
          <input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="000-00-00"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit"
          // disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </Button>
      </Container>
    );
  }
}

export default Form;