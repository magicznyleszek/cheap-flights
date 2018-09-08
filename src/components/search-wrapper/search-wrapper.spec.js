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

    const el = angular.element('<search-wrapper></search-wrapper>');
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should not call provided callback when submitting invalid form', () => {
    expect(false).to.equal(true);
  });

  it('should call provided callback when submitting valid form', () => {
    expect(false).to.equal(true);
  });

  it('should read params from url', () => {
    expect(false).to.equal(true);
  });

  it('should update url params when submitting valid form', () => {
    expect(false).to.equal(true);
  });

  it('should set errors for invalid partials when submitting', () => {
    expect(false).to.equal(true);
  });

  it('should override invalid end date', () => {
    expect(false).to.equal(true);
  });
});
