import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import './index.css';
import Temperature from './temperature/index';
class WeatherContainer extends Component {
  render() {
    return (
      <div className="weather-container">
        <Paper>
          <Temperature/>
        </Paper>
      </div>
    );
  }
}

export default WeatherContainer;