import React, { Component } from 'react';

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      url: '',
      errors: {},
    };
  }

  validateName = (name) => {
    // Name should consist of between 5 to 50 upper and lower case English alphabets
    const regex = /^[a-zA-Z]{5,50}$/;
    return regex.test(name);
  };

  validateEmail = (email) => {
    // Validate email using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  validatePhone = (phone) => {
    // Phone should be a 10-digit number
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  validateURL = (url) => {
    // Validate URL using a regular expression
    const regex = /^(https?:\/\/(www\.)?|www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}/;
    return regex.test(url);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, url } = this.state;
    const errors = {};

    if (!this.validateName(name)) {
      errors.name = 'Name should consist of between 5 to 50 alphabets';
    }

    if (!this.validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!this.validatePhone(phone)) {
      errors.phone = 'Phone should be a 10-digit number';
    }

    if (!this.validateURL(url)) {
      errors.url = 'Invalid URL';
    }

    if (Object.keys(errors).length === 0) {
      // All fields are valid
      this.setState({ errors: {} });
      alert('Form is Complete');
    } else {
      // One or more fields contain invalid values
      this.setState({ errors });
      alert('Incomplete!');
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          placeholder="Email"
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleInputChange}
          placeholder="Phone"
        />
        {errors.phone && <div className="error">{errors.phone}</div>}

        <input
          type="text"
          name="url"
          value={this.state.url}
          onChange={this.handleInputChange}
          placeholder="Blog URL"
        />
        {errors.url && <div className="error">{errors.url}</div>}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormValidation;
