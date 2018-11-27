import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe'
          email: 'Jdoe@gmail.com'
          phone: '555-444-3333'
        },
        {
          id: 2,
          name: 'Karen Doe'
          email: 'KKaren@gmail.com'
          phone: '155-244-3332'
        },
        {
          id: 1,
          name: 'Henry Johnson'
          email: 'Henry@gmail.com'
          phone: '115-422-8893'
        }

      ]
    }

  }

 

  render() {
    return (
      <div>{this.state.contacts.map(contact => (<h1>{contact.name}</h1>)} </div>;
    )
  }
}

componentName.propTypes = {

}

export default Contacts;
