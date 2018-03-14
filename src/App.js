import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import Helper from './components/helper/index';
import WeatherContainer from './components/weathercontainer/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Helper/>
        <WeatherContainer/>
      </div>
    );
  }
}

export default App;
