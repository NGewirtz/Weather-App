import React from 'react';
import ForecastItem from './forecast_item.jsx';

class ForecastContainer extends React.Component{

  render(){
    const forecastItems = this.props.forecastDays.map( forecast => {
      return <ForecastItem forecast={forecast}
        fahrenheit={this.props.fahrenheit}
        key={forecast.timestamp}
      />;
    });
    return (
      <ul>
        { forecastItems }
      </ul>
    );
  }
}


export default ForecastContainer;
