import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <p>Hello World</p>
        <img alt="placeholder" src={`statics/img/placeholder.png`} />
      </div>
    );
  }
}

export default App;
