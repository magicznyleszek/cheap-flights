import angular from 'angular';
import AirportSelectorComponent from './airport-selector/airport-selector.component';
import DateWrapperComponent from './date-wrapper/date-wrapper.component';
import DateSelectorComponent from './date-selector/date-selector.component';

export default angular.module('app.components', [])
.component('airportSelector', AirportSelectorComponent)
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.name;
