import SearchWrapperComponent from './search-wrapper.component';
import {
  SearchParamsService
} from '../../services';

describe('Component searchWrapper', () => {
  let $compile;
  let $rootScope;
  let scope;
  let componentEl;
  let searchParams;

  const MockAirportsService = function AirportsService($q) {
    'ngInject';

    this.getAirportsAsync = () => {
      const deferred = $q.defer();
      deferred.resolve([]);
      return deferred.promise;
    };
    this.getAirportDestinations = () => [];
  };

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock', 'ui.router'])
      .service('AirportsService', MockAirportsService)
      .service('SearchParamsService', SearchParamsService)
      .component('searchWrapper', SearchWrapperComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    $compile = $injector.get('$compile');
    searchParams = $injector.get('SearchParamsService');

    scope.onSubmit = angular.noop;

    const el = angular.element('<search-wrapper on-submit="onSubmit"></search-wrapper>');
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should not call provided callback when submitting invalid form', () => {
    const ctrl = componentEl.controller('search-wrapper');
    sinon.spy(ctrl, 'onSubmit');
    ctrl.onSafeSubmit();
    expect(ctrl.onSubmit.called).to.equal(false);
  });

  it('should call provided callback when submitting valid form', () => {
    const ctrl = componentEl.controller('search-wrapper');
    ctrl.sourceIataCode = 'AAA';
    ctrl.destinationIataCode = 'BBB';
    ctrl.startDate = new Date();
    ctrl.endDate = new Date();
    sinon.spy(ctrl, 'onSubmit');
    ctrl.onSafeSubmit();
    expect(ctrl.onSubmit.called).to.equal(true);
  });

  it('should update url params when submitting valid form', () => {
    const ctrl = componentEl.controller('search-wrapper');
    ctrl.sourceIataCode = 'AAA';
    ctrl.destinationIataCode = 'BBB';
    ctrl.startDate = new Date('2000-11-22');
    ctrl.endDate = new Date('2000-11-22');
    ctrl.onSafeSubmit();
    expect(searchParams.getParam('source')).to.equal('AAA');
    expect(searchParams.getParam('dest')).to.equal('BBB');
    expect(searchParams.getParam('from')).to.equal('2000-11-22');
    expect(searchParams.getParam('to')).to.equal('2000-11-22');
  });

  it('should set errors for invalid partials when submitting', () => {
    const ctrl = componentEl.controller('search-wrapper');
    ctrl.onSafeSubmit();
    expect(ctrl.sourceError).not.to.equal(null);
    expect(ctrl.destinationError).not.to.equal(null);
    expect(ctrl.startDateError).not.to.equal(null);
    expect(ctrl.endDateError).not.to.equal(null);
  });

  it('should override invalid end date', () => {
    const ctrl = componentEl.controller('search-wrapper');
    ctrl.onStartDateChange('2000-11-22');
    ctrl.onEndDateChange('1999-01-01');
    expect(ctrl.getSearchSubmitParams().endDate).to.equal('2000-11-24');
  });

  describe('on initialization', () => {
    beforeEach(() => {
      searchParams.setParam('source', 'LND');
      searchParams.setParam('from', '2000-11-22');
    });

    it('should read and apply params from url', () => {
      const ctrl = componentEl.controller('search-wrapper');
      ctrl.$onInit();
      $rootScope.$digest();
      expect(ctrl.sourceIataCode).to.equal('LND');
      expect(String(ctrl.startDate)).to.equal(String(new Date('2000-11-22')));
    });
  });
});
