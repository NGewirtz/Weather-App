import React from 'react';
import { dateFormatter } from '../util/format.js';

const ForecastItem = ({forecast, fahrenheit}) => {
  const low = fahrenheit ? `${forecast.minTempF} F`: `${forecast.minTempC} C`;
  const high = fahrenheit ? `${forecast.maxTempF} F`: `${forecast.maxTempC} C`;
  return(
    <li>
      <h2>{ dateFormatter(forecast.dateTimeISO) }</h2>
      <img src={`assets/${forecast.icon}`}/>
      <h3>Low: { low }</h3>
      <h3>High: { high }</h3>
    </li>
  );
};

export default ForecastItem;
