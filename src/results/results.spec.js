import ResultsPageComponent from './results.component';

describe('Component resultsPage', () => {
  let $compile;
  let scope;
  let componentEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('resultsPage', ResultsPageComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');

    const el = angular.element('<results></results>');
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should ?', () => {
    expect(false).to.equal(true);
  });
});
