import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    // dead code elimination works as expected with available environment vars
    if (process.env.NODE_ENV === 'development') {
      console.log('NODE_ENV: development')
    } else {
      console.log('NODE_ENV: something else');
    }

    // dead code elimination does not work if the variable is not set
    if (process.env.REACT_APP_FOO === 'bar') {
      console.log('REACT_APP_FOO: bar')
    } else {
      console.log('REACT_APP_FOO: something else');
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
