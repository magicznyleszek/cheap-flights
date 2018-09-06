import template from './flight.component.html';
import controller from './flight.controller';
import './flight.component.scss';

const FlightComponent = {
  bindings: {
    dateFrom: '<'
  },
  template,
  controller
};

export default FlightComponent;
