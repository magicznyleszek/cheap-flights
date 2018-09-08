import SearchParamsService from './search-params.service';

describe('SearchParamsService', () => {
  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('cheapFlightsService', SearchParamsService);
    angular.mock.module('cheapFlightsApp');
  });

  it('should return url param with getParam', () => {
    expect(false).to.equal(true);
  });

  it('should update url param with setParam', () => {
    expect(false).to.equal(true);
  });
});
