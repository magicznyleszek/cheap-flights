import SearchParamsService from './search-params.service';

describe('SearchParamsService', () => {
  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('cheapFlightsService', SearchParamsService);
    angular.mock.module('cheapFlightsApp');
  });

  it('should ?', () => {
    expect(false).to.equal(true);
  });
});
