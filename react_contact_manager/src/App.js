import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import AddContact from './Components/contacts/AddContact';
import { Provider } from './context';


class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Provider>
         <div className="App">
          <h1>The App Component</h1>
          <Header branding= "React Contact Manager" />
          {/*<Contact 
          name="John doe"
          email="jdoe@gmail.com"
          phone="555-444-3333" 
          />*/}

          <Contacts />
      
          </div>
      </Provider>
    );
  }
}

export default App;
