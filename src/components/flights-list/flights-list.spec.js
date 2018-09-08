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

    scope.flights = [];

    const el = angular.element('<flights-list flights="flights"></flights-list>');
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should ?', () => {
    expect(false).to.equal(true);
  });
});
