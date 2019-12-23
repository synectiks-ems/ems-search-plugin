import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "../../../css/searchApp.css";
import { VehicleSearchPage } from './vehicleSearchPage';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <VehicleSearchPage />,
      document.getElementById('searchContainer')
    );
  }, 100);
}
