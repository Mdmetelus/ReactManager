import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import { Provider } from './context';


class App extends Component {
  constructor(props) {
    super(props);


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
