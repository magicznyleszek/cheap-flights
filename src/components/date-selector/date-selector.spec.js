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

    scope.date = null;

    const el = angular.element('<date-selector date="date"/>');
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should preselect provided date', () => {
    scope.date = new Date('Fri Nov 22 2000 10:00:00 GMT+0200 (Central European Summer Time)');
    scope.$apply();
    expect(componentEl[0].querySelector('.date-selector').value).to.equal('2000-11-22');
  });

  it('should call provided callback with selected date', () => {
    expect(false).to.equal(true);
  });

  it('should display provided error message', () => {
    expect(false).to.equal(true);
  });
});
