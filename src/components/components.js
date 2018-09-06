import angular from 'angular';
import AirportSelectorComponent from './airport-selector/airport-selector.component';
import DateSelectorComponent from './date-selector/date-selector.component';
import FlightsListComponent from './flights-list/flights-list.component';
import MainMenuComponent from './main-menu/main-menu.component';
import SearchWrapperComponent from './search-wrapper/search-wrapper.component';

export default angular.module('app.components', [])
.component('airportSelector', AirportSelectorComponent)
.component('dateSelector', DateSelectorComponent)
.component('flightsList', FlightsListComponent)
.component('mainMenu', MainMenuComponent)
.component('searchWrapper', SearchWrapperComponent)
.name;
