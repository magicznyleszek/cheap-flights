import DateSelectorComponent from './date-selector.component';

describe('Component dateSelector', () => {
  let $compile;
  let scope;
  let componentEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('dateSelector', DateSelectorComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');

    scope.label = null;
    scope.error = null;
    scope.date = null;
    scope.callback = angular.noop;

    const el = angular.element(`
      <date-selector
        label="label"
        error="error"
        date="date"
        on-date-change="callback(date)"
      ></date-selector>
    `);
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should preselect provided date', () => {
    scope.date = new Date('Fri Nov 22 2000 10:00:00 GMT+0200 (Central European Summer Time)');
    scope.$apply();
    expect(componentEl[0].querySelector('.date-selector__input').value).to.equal('2000-11-22');
  });

  it('should call provided callback with selected date', () => {
    const ctrl = componentEl.controller('date-selector');
    sinon.spy(scope, 'callback');
    ctrl.onInputChange();
    expect(scope.callback.called).to.equal(true);
  });

  it('should display provided label', () => {
    scope.label = 'Hai!';
    scope.$apply();
    expect(componentEl[0].querySelector('.date-selector__label').innerText).to.equal('Hai!');
  });

  it('should display provided error message', () => {
    scope.error = 'Oh noes!';
    scope.$apply();
    expect(componentEl[0].querySelector('.date-selector__error').innerText).to.equal('Oh noes!');
  });
});
