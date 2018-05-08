import React from 'react';

const ForecastItem = ({forecast}) => {
  return(
    <li>
      <h2>{ forecast.dateTimeISO }</h2>
      <h3>Low: { forecast.minTempF }</h3>
      <h3>High: { forecast.maxTempF }</h3>
    </li>
  );
};

export default ForecastItem;
