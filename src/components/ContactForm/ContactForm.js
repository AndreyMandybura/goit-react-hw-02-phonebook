import { Component } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

class ContactForm extends Component {

    state = {
        name: "",
        number: "",
  };
    
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };
    
    render() {
        return (
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.label}> Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              className={s.inputName}
            />
          </label>
          <label className={s.label}>Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              className={s.inputNumber}
            />
          </label>
          <button type="submit" className={s.button}>Add contact</button>
        </form>

        );
    }

};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;