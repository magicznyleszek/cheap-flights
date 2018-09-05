import SearchWrapperComponent from './search-wrapper.component';

describe('Component searchWrapper', () => {
  let $compile;
  let scope;
  let componentEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('searchWrapper', SearchWrapperComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');

    const el = angular.element('<search-wrapper/>');
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should ?', () => {
    expect(false).to.equal(true);
  });
});
