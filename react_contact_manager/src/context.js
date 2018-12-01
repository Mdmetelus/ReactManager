import React, { Component} from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch(action.type) {
    case 'Delete_Contact':
      return {
        ...state,
        contacts:state.contacts.filter(contact => contact.id !== action.payload)
      };
    case 'Add_Contact':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;

  }
}

export class Provider extends Conponent {
  state = {

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

    ],
    dispatch: action => {
      this.setState( state => reducer(state, action))
    }
  };


  render() {
    return(
      <Context.Provider value= {this.state}>
        {this.props.children}
      
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;