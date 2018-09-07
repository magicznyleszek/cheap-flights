import angular from 'angular';
import AirportSelectorComponent from './airport-selector/airport-selector.component';
import DateSelectorComponent from './date-selector/date-selector.component';
import FlightsListComponent from './flights-list/flights-list.component';
import GlobalMenuComponent from './global-menu/global-menu.component';
import GlobalFooterComponent from './global-footer/global-footer.component';
import SearchWrapperComponent from './search-wrapper/search-wrapper.component';
import './layout/layout.component';

export default angular.module('app.components', [])
.component('airportSelector', AirportSelectorComponent)
.component('dateSelector', DateSelectorComponent)
.component('flightsList', FlightsListComponent)
.component('globalMenu', GlobalMenuComponent)
.component('globalFooter', GlobalFooterComponent)
.component('searchWrapper', SearchWrapperComponent)
.name;
