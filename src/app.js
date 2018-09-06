import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import HomeComponent from './home/home.component';
import ResultsComponent from './results/results.component';
import {
  CheapFlightsService,
  AirportsService,
  SearchParamsService
} from './services';
import './config/reset.scss';
import './config/root.scss';

angular.module('cheapFlightsApp', [
  uiRouter,
  Components
])
.component('homePage', HomeComponent)
.component('resultsPage', ResultsComponent)
.service('AirportsService', AirportsService)
.service('CheapFlightsService', CheapFlightsService)
.service('SearchParamsService', SearchParamsService)
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home-page></home-page>'
    })
    .state('results', {
      url: '/results?:source&:dest&:from&:to',
      template: '<results-page></results-page>'
    });
});
