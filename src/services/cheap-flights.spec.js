import CheapFlightsService from './cheap-flights.service';

describe('CheapFlightsService', () => {
  let $httpBackend;
  let $rootScope;
  let cheapFlights;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .service('CheapFlightsService', CheapFlightsService);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    cheapFlights = $injector.get('CheapFlightsService');
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.resetExpectations();
  });

  it('should return flights array with findFlights method', () => {
    const testUrl = cheapFlights.getURL('a', 'b', 'c', 'd');

    $httpBackend.expectGET(testUrl).respond(200, { flights: [
      { currency: '$' },
      { currency: '$' }
    ] });

    let foundFlights = [];
    const foo = { successCallback: (flights) => { foundFlights = flights; } };
    sinon.spy(foo, 'successCallback');

    cheapFlights.findFlights('a', 'b', 'c', 'd').then(
      foo.successCallback
    );

    $httpBackend.flush();
    $rootScope.$digest();

    expect(foo.successCallback.called).to.equal(true);
    expect(foundFlights.length).to.equal(2);
    expect(foundFlights[0].currency).to.equal('$');
  });
});
