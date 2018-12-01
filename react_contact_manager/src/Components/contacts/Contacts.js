import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import { Consumer } from '../../context'

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{
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

    // deleteContact= (id) => {
    //   const { contacts } = this.state;

    //   const newContacts= contacts.filter(thisContact => thisContact.id !== id);
    //   this.setState({
    //     contacts: newContacts
    //   })
    // }



    render() {
        return ( <
            Consumer > {
                value => {
                    const { contacts } = value;
                    return ( <
                        div > {
                            contacts.map(contact => ( <
                                Contact key = { contact.id }
                                name = { contact.name }
                                email = { contact.email }
                                phone = { contact.phone } { /*deleteClickHandler={this.deleteContact.bind(this, contact.id)}*/ }
                                />
                            ))
                        } < /div>


                    )
                }
            } <
            /Consumer>
        )
        return ( <
            div > {
                this.state.contacts.map(contact => ( <
                    Contact key = { contact.id }
                    name = { contact.name }
                    email = { contact.email }
                    phone = { contact.phone }
                    deleteClickHandler = { this.deleteContact.bind(this, contact.id) }
                    /> 
                ))
            } < /div>
        );

    }
}


// componentName.propTypes = {

// }

export default Contacts;