import template from './airport-selector.component.html';
import controller from './airport-selector.controller';
import './airport-selector.component.scss';

const AirportSelectorComponent = {
  bindings: {
    selectedId: '<',
    airports: '<',
    onSelectedChange: '&'
  },
  template,
  controller
};

export default AirportSelectorComponent;
