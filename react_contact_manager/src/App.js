import React, { Component } from 'react';
import './App.css';
import Contact from './Components/Contact';

class App extends Component {



  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Contact />
        <Contact />
        <Contact />
      </div>
    );
  }
}

export default App;
