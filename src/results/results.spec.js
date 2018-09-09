import ResultsPageComponent from './results.component';
import {
  AirportsService,
  CheapFlightsService
} from '../services';

describe('Component resultsPage', () => {
  let $compile;
  let $rootScope;
  let $httpBackend;
  let scope;
  let airportsSrv;
  let componentEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .service('AirportsService', AirportsService)
      .service('CheapFlightsService', CheapFlightsService)
      .component('resultsPage', ResultsPageComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    $compile = $injector.get('$compile');
    $httpBackend = $injector.get('$httpBackend');
    airportsSrv = $injector.get('AirportsService');

    const el = angular.element('<results-page></results-page>');
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should clear data and start loading flights on submitting search', () => {
    $httpBackend.expectGET(new RegExp('/flight-booking-selector/')).respond(200, { airports: [] });
    airportsSrv.getAirportsAsync();
    $httpBackend.flush();
    $rootScope.$digest();

    const ctrl = componentEl.controller('results-page');
    ctrl.flights = [{ currency: '$' }];
    sinon.spy(ctrl, 'loadFlights');
    ctrl.onSearchSubmit({});
    expect(ctrl.flights).to.equal(null);
    expect(ctrl.loadFlights.calledOnce).to.equal(true);
  });
});
