import SearchParamsService from './search-params.service';

describe('SearchParamsService', () => {
  let searchParams;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock', 'ui.router'])
      .service('SearchParamsService', SearchParamsService);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    searchParams = $injector.get('SearchParamsService');
  }));

  it('should update url param with setParam', () => {
    searchParams.setParam('source', 'AAA');
    expect(searchParams.getParam('source')).to.equal('AAA');
    searchParams.setParam('source', 'BBB');
    expect(searchParams.getParam('source')).to.equal('BBB');
  });

  it('should return url param with getParam', () => {
    expect(searchParams.getParam('source')).not.to.equal(null);
    searchParams.setParam('source', 'AAA');
    expect(searchParams.getParam('source')).to.equal('AAA');
  });
});
