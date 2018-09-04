import angular from 'angular';
import AirportSelectorComponent from './airport-selector/airport-selector.component';
import DateWrapperComponent from './date-wrapper/date-wrapper.component';
import DateSelectorComponent from './date-selector/date-selector.component';
import SearchWrapperComponent from './search-wrapper/search-wrapper.component';

export default angular.module('app.components', [])
.component('airportSelector', AirportSelectorComponent)
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.component('searchWrapper', SearchWrapperComponent)
.name;
