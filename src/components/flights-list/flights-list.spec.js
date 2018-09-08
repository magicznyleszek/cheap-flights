import FlightsListComponent from './flights-list.component';

describe('Component flightsList', () => {
  let $compile;
  let scope;
  let componentEl;

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
    scope.onFlightSelected = angular.noop;

    const el = angular.element(`
      <flights-list
        source-name="sourceName"
        destination-name="destinationName"
        is-loading="isLoading"
        empty-message="emptyMessage"
        flights="flights"
        on-flight-selected="onFlightSelected"
      ></flights-list>
    `);
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should display provided airports names', () => {
    expect(false).to.equal(true);
  });

  it('should display loading message based on is-loading', () => {
    expect(false).to.equal(true);
  });

  it('should display provided empty message when zero results', () => {
    expect(false).to.equal(true);
  });

  it('should display fallback empty message if no custom provided', () => {
    expect(false).to.equal(true);
  });

  it('should display provided flights list', () => {
    expect(false).to.equal(true);
  });

  it('should call provided callback with selected flight', () => {
    expect(false).to.equal(true);
  });
});
