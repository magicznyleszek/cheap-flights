import CheapFlightsService from './cheap-flights.service';

describe('CheapFlightsService', () => {
  let $httpBackend;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('cheapFlightsService', CheapFlightsService);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should return flights array with findFlights method', () => {
    expect(false).to.equal(true);
  });
});
