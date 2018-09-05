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

  it('should ?', () => {
    expect(false).to.equal(true);
  });
});
