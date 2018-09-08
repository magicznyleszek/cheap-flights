import SearchWrapperComponent from './search-wrapper.component';
import {
  AirportsService,
  SearchParamsService
} from '../../services';

describe('Component searchWrapper', () => {
  let $compile;
  let scope;
  let componentEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock', 'ui.router'])
      .service('AirportsService', AirportsService)
      .service('SearchParamsService', SearchParamsService)
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

  it('should read and apply params from url', () => {
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
