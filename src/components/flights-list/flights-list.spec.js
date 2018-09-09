import FlightsListComponent from './flights-list.component';

describe('Component flightsList', () => {
  let $compile;
  let scope;
  let componentEl;

  const mockFlights = [
    {
      dateFrom: '2013-01-31T11:18:16.564Z',
      dateTo: '2013-01-31T16:43:51.822Z',
      currency: '€',
      price: 100
    },
    {
      dateFrom: '2015-01-31T11:18:16.564Z',
      dateTo: '2015-01-31T16:43:51.822Z',
      currency: '€',
      price: 66.6666666666
    }
  ];

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('flightsList', FlightsListComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');

    scope.sourceName = null;
    scope.destinationName = null;
    scope.isLoading = null;
    scope.emptyMessage = null;
    scope.flights = null;
    scope.callback = angular.noop;

    const el = angular.element(`
      <flights-list
        source-name="sourceName"
        destination-name="destinationName"
        is-loading="isLoading"
        empty-message="emptyMessage"
        flights="flights"
        on-flight-selected="callback(flight)"
      ></flights-list>
    `);
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should display loading message based on is-loading', () => {
    expect(componentEl[0].querySelector('.flights-list__loading')).to.equal(null);
    scope.isLoading = true;
    scope.$apply();
    expect(componentEl[0].querySelector('.flights-list__loading')).not.to.equal(null);
  });

  it('should display provided flights list', () => {
    expect(componentEl[0].querySelectorAll('.flights-list__item').length).to.equal(0);
    scope.flights = mockFlights;
    scope.$apply();
    expect(componentEl[0].querySelectorAll('.flights-list__item').length).to.equal(mockFlights.length);
  });

  it('should display provided airports names in results', () => {
    scope.sourceName = 'Warsaw';
    scope.destinationName = 'Berlin';
    scope.flights = mockFlights;
    scope.$apply();
    expect(
      componentEl[0].querySelector('.flights-list__airport--liftoff .flights-list__airport-name').innerText
    ).to.equal('Warsaw');
    expect(
      componentEl[0].querySelector('.flights-list__airport--landing .flights-list__airport-name').innerText
    ).to.equal('Berlin');
  });

  it('should display provided empty message when zero results', () => {
    scope.emptyMessage = 'Nada';
    scope.flights = [];
    scope.$apply();
    expect(componentEl[0].querySelector('.flights-list__item--empty-message').innerText).to.equal('Nada');
  });

  it('should display fallback empty message if no custom provided', () => {
    scope.flights = [];
    scope.$apply();
    expect(componentEl[0].querySelector('.flights-list__item--empty-message').innerText).to.equal('No results');
  });

  it('should call provided callback with selected flight', () => {
    const ctrl = componentEl.controller('flights-list');
    scope.$apply();
    sinon.spy(scope, 'callback');
    ctrl.onFlightSelected();
    expect(scope.callback.called).to.equal(true);
  });
});
