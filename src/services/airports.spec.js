import AirportsService from './airports.service';

describe('AirportsService', () => {
  let $httpBackend;
  let $rootScope;
  let airportsSrv;

  const mockResponse = {
    routes: {
      AAA: ['BBB', 'CCC'],
      BBB: ['AAA'],
      CCC: ['AAA']
    },
    airports: [
      { iataCode: 'AAA', name: 'Alpha' },
      { iataCode: 'BBB', name: 'Beta' },
      { iataCode: 'CCC', name: 'Ceta' }
    ]
  };

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .service('AirportsService', AirportsService);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    airportsSrv = $injector.get('AirportsService');
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.resetExpectations();
  });

  it('should return airports from server', () => {
    $httpBackend.expectGET(new RegExp('/flight-booking-selector/')).respond(200, mockResponse);

    let airportsData = [];
    const foo = { successCallback: (airports) => { airportsData = airports; } };
    sinon.spy(foo, 'successCallback');

    airportsSrv.getAirportsAsync().then(foo.successCallback);

    $httpBackend.flush();
    $rootScope.$digest();

    expect(foo.successCallback.called).to.equal(true);
    expect(airportsData.length).to.equal(3);
  });

  it('should store API data after first call', () => {
    $httpBackend.expectGET(new RegExp('/flight-booking-selector/')).respond(200, mockResponse);

    sinon.spy(airportsSrv, 'getAPIData');

    airportsSrv.getAirportsAsync();
    $httpBackend.flush();
    $rootScope.$digest();

    expect(airportsSrv.getAPIData.calledOnce).to.equal(true);

    airportsSrv.getAirportsAsync();

    expect(airportsSrv.getAPIData.calledOnce).to.equal(true);
  });

  it('should throw errors when trying to use sync methods before API Data is ready', () => {
    const clb1 = () => { airportsSrv.getAirport('LND'); };
    const clb2 = () => { airportsSrv.getAirportDestinations('LND'); };
    expect(clb1).to.throw();
    expect(clb2).to.throw();
  });

  describe('with API Data ready', () => {
    beforeEach(() => {
      $httpBackend.expectGET(new RegExp('/flight-booking-selector/')).respond(200, mockResponse);
      airportsSrv.getAirportsAsync();
      $httpBackend.flush();
      $rootScope.$digest();
    });

    it('should return airport with getAirport', () => {
      const alpha = airportsSrv.getAirport('AAA');
      expect(alpha.iataCode).to.equal('AAA');
      expect(alpha.name).to.equal('Alpha');
    });

    it('should return airport destinations with getAirportDestinations', () => {
      const dests = airportsSrv.getAirportDestinations('AAA');
      expect(dests.length).to.equal(2);
      expect(dests[0].name).to.equal('Beta');
      expect(dests[1].name).to.equal('Ceta');
    });
  });
});
