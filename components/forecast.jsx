import React from 'react';
import ForecastContainer from './forecast_container.jsx';
import { getForecast } from '../util/ajax.js';

class Forecast extends React.Component{
  constructor(props){
    super(props);
    this.changeTempType = this.changeTempType.bind(this);
    this.state = {
      forecast: [],
      fahrenheit: true,
    };
  }

  componentDidMount() {
    getForecast()
    .then( data => {
      const forecast = data.response[0].periods;
      this.setState({forecast});
    });
  }

  changeTempType() {
    this.setState({fahrenheit: !this.state.fahrenheit});
  }

  render(){
    return (
      <main>
        <h1>Seven Day Forecast</h1>
        <ForecastContainer
          forecastDays={this.state.forecast}
          fahrenheit={this.state.fahrenheit}
        />
        <button onClick={this.changeTempType}>
          Switch to { this.state.fahrenheit ? "Celsius" : "Fahrenheit"}
        </button>
      </main>
    );
  }
}

export default Forecast;
