import AirportSelectorComponent from './airport-selector.component';

describe('Component airportSelector', () => {
  let $compile;
  let scope;
  let componentEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('airportSelector', AirportSelectorComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');

    scope.airports = [];
    scope.placeholder = null;
    scope.error = null;
    scope.selectedIataCode = null;
    scope.callback = angular.noop;

    const el = angular.element(`
      <airport-selector
        placeholder="placeholder"
        error="error"
        airports="airports"
        selected-iata-code="selectedIataCode"
        on-selected-change="callback(iataCode)"
      ></airport-selector>
    `);
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should display empty message for no airports', () => {
    scope.airports = [];
    scope.$apply();
    expect(componentEl[0].querySelector('.airport-selector__option').innerText).to.equal('No airport');
  });

  it('should display provided list of airports', () => {
    scope.airports = [
      { name: 'Lisbon', iataCode: 'LSB' },
      { name: 'Warsaw', iataCode: 'WAW' }
    ];
    scope.$apply();
    expect(componentEl[0].querySelectorAll('.airport-selector__option').length).to.equal(2);
  });

  it('should preselect provided airport', () => {
    scope.airports = [
      { name: 'Lisbon', iataCode: 'LSB' },
      { name: 'Warsaw', iataCode: 'WAW' }
    ];
    scope.selectedIataCode = 'LSB';
    scope.$apply();
    expect(componentEl[0].querySelector('.airport-selector__option--selected').innerText).to.equal('Lisbon');
  });

  it('should call provided callback with selected airport', () => {
    const ctrl = componentEl.controller('airport-selector');
    scope.airports = [
      { name: 'Lisbon', iataCode: 'LSB' },
      { name: 'Warsaw', iataCode: 'WAW' }
    ];
    scope.$apply();
    sinon.spy(scope, 'callback');
    ctrl.selectAirport('LSB');
    expect(scope.callback.called).to.equal(true);
  });

  it('should close on ESC key', () => {
    const ctrl = componentEl.controller('airport-selector');
    ctrl.activate();
    expect(ctrl.isActive).to.equal(true);
    ctrl.onSelectKeyup({ key: 'Escape' });
    expect(ctrl.isActive).to.equal(false);
  });

  it('should display provided placeholder', () => {
    scope.placeholder = 'Hai!';
    scope.$apply();
    expect(componentEl[0].querySelector('.airport-selector__value').innerText).to.equal('Hai!');
  });

  it('should display provided error message', () => {
    scope.error = 'Oh noes!';
    scope.$apply();
    expect(componentEl[0].querySelector('.airport-selector__error').innerText).to.equal('Oh noes!');
  });
});
