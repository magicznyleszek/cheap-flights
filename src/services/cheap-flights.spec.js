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

  it('should ?', () => {
    expect(false).to.equal(true);
  });
});
