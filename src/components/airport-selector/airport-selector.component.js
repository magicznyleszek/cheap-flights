import template from './airport-selector.component.html';
import controller from './airport-selector.controller';
import './airport-selector.component.scss';

const AirportSelectorComponent = {
  bindings: {
    placeholder: '<',
    selectedIataCode: '<',
    airports: '<',
    onSelectedChange: '&'
  },
  template,
  controller
};

export default AirportSelectorComponent;
