import DateSelectorComponent from './date-selector.component';

describe('Component dateSelector', () => {
  let $compile;
  let scope;
  let selectorEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('dateSelector', DateSelectorComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');

    scope.date = null;

    const el = angular.element('<date-selector date="date"/>');
    selectorEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should preselect provided date', () => {
    expect(false).to.equal(true);
  });

  it('should call provided callback with selected date', () => {
    expect(false).to.equal(true);
  });
});
