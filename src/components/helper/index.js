import React, { Component } from 'react';
import './index.css';
import SwirlyArrow from './swirly-arrow-pointing-upwards.svg';
import Grid from 'material-ui/Grid';

class Helper extends Component {
  constructor() {
    super();
    this.state = {
      click: false
    }
  }
  handleUpdateClick = () => {
    this.setState({
      click: true
    })
  }
  render() {
    return (
      <div className="helper-container" style={{ display: this.state.click ? 'none' : 'flex'}} onClick={this.handleUpdateClick}>
        <Grid container spacing={24}>
          <Grid item xs={4} sm={4}></Grid>
          <Grid item xs={4} sm={4}>
            <p className="helper-text">Use the search bar to look for the weather on your city</p>
          </Grid>
          <Grid item xs={4} sm={4}>
            <img className="swirly-arrow" src={SwirlyArrow} alt="Swirly Arrow Pointing Upwards"/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Helper;