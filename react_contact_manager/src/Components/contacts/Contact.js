import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';


class Contact extends Component {
    state = {
        showContactInfo: false
    };


    onShowClick = (e) => {
        console.log(this.state);
        this.setState({ showContactInfo: !this.state.showContactInfo });

    };

    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        // this.props.deleteClickHandler

    };


    render() {
            const { id, name, email, phone } = this.props.contact;
            const { showContactInfo } = this.state;
            return (

                <
                Consumer > {
                    value => {
                        const { dispatch } = value
                        return (

                                <
                                div >
                                <
                                h4 > { name } < span onClick = {
                                    () =>
                                    this.setState({ showContactInfo: !this.state.showContactInfo })
                                }
                                style = {
                                    { cursor: 'pointer' } } > -Down Arrow - < /span></h
                                4 >
                                <
                                span style = {
                                    { cursor: 'pointer', float: 'right', color: 'red' } }
                                onClick = { this.onDeleteClick.bind(this, id, dispatch) } > < /span> {
                                    showContactInfo ? ( < ul >
                                        <
                                        li > Email: { email } < /li> <
                                        li > Phone: { phone } < /li> <
                                        /ul>) : null}

                                        <
                                        /div>

                                    );
                                }
                            } <
                            /Consumer>

                    )
                }
            };

            Contact.propTypes = {
                contact: PropTypes.object.isRequired,
                // deleteClickHandler: PropTypes.funct.isRequired,
            };


            export default Contact;