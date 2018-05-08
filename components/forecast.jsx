import React from 'react';
import ForecastContainer from './forecast_container.jsx';
import { getForecast } from '../util/ajax.js';

class Forecast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      forecast: [],
    };
  }

  componentDidMount() {
    getForecast()
    .then( data => {
      const forecast = data.response[0].periods;
      this.setState({forecast});
    });
  }

  render(){
    return (
      <main>
        <h1>Seven Day Forecast</h1>
        <ForecastContainer forecastDays={this.state.forecast}/>
      </main>
    );
  }
}

export default Forecast;
