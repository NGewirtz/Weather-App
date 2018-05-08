import React from 'react';
import ForecastItem from './forecast_item.jsx';

class ForecastContainer extends React.Component{

  render(){
    if (this.props.forecastDays.length > 0) {
      const forecastItems = this.props.forecastDays.map( forecast => {
        return <ForecastItem forecast={forecast} key={forecast.timestamp}/>;
      });
      return (
        <ul>
          { forecastItems }
        </ul>
      );
    }else {
      return (
        <h1>Loading</h1>
      );
    }
  }
}

export default ForecastContainer;
