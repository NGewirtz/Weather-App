import React from 'react';
import ReactDOM from 'react-dom';

import Forecast from './forecast';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Forecast />, document.getElementById('main'));
});
