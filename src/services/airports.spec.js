import AirportsService from './airports.service';

describe('AirportsService', () => {
  let $httpBackend;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('airportsService', AirportsService);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should store main API data after first fetch', () => {
    expect(false).to.equal(true);
  });

  it('should throw errors when trying to use sync methods before API Data is ready', () => {
    expect(false).to.equal(true);
  });

  it('should return airport with getAirport', () => {
    expect(false).to.equal(true);
  });

  it('should return airport destinations with getAirportDestinations', () => {
    expect(false).to.equal(true);
  });
});
