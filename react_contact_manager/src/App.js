import React, { Component } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';


class App extends Component {



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
        
        <Contact />
        <Contact />
      </div>
    );
  }
}

export default App;
