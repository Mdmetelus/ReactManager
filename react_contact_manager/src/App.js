import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import Header from './Components/Header';


class App extends Component {
  constructor(props) {
    super(props);


  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Header branding= "React Contact Manager" />
        <Contact 
        name="John doe"
        email="jdoe@gmail.com"
        phone="555-444-3333" 
        />

        <Contacts />
        <Contact />
      </div>
    );
  }
}

export default App;
