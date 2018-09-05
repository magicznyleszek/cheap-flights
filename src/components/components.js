import angular from 'angular';
import AirportSelectorComponent from './airport-selector/airport-selector.component';
import DateSelectorComponent from './date-selector/date-selector.component';
import SearchWrapperComponent from './search-wrapper/search-wrapper.component';
import FlightsListComponent from './flights-list/flights-list.component';
import FlightComponent from './flight/flight.component';

export default angular.module('app.components', [])
.component('airportSelector', AirportSelectorComponent)
.component('dateSelector', DateSelectorComponent)
.component('searchWrapper', SearchWrapperComponent)
.component('flightsList', FlightsListComponent)
.component('flight', FlightComponent)
.name;
