import template from './date-selector.component.html';
import controller from './date-selector.controller';
import './date-selector.component.scss';

const DateSelectorComponent = {
  bindings: {
    date: '<',
    onDateChange: '&'
  },
  template,
  controller
};

export default DateSelectorComponent;
