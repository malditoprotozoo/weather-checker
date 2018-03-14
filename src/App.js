import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import Helper from './components/helper/index';
import WeatherContainer from './components/weathercontainer/index';
import { store } from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <Helper/>
          <WeatherContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
