export default function CheapFlightsService($q, $http) {
  'ngInject';

  const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/DUB/to/STN/2014-12-02/2015-02-02/250/unique/?limit=15&offset-0';
  const pageSize = 15;

  this.getUrl = (sourceIataCode, destinationIataCode, startDate, endDate, page = 0) => {
    const offset = page * pageSize;
    let finalURL = baseURL;
    finalURL += `/from/${sourceIataCode}`;
    finalURL += `/to/${destinationIataCode}`;
    finalURL += `/${startDate}`;
    finalURL += `/${endDate}`;
    finalURL += `/250/unique/?limit=${pageSize}&offset=${offset}`;
    return finalURL;
  };

  this.findFlights = (sourceIataCode, destinationIataCode, startDate, endDate, page) => {
    const deferred = $q.defer();

    if (!sourceIataCode || !destinationIataCode || !startDate || !endDate) {
      deferred.reject();
    } else {
      const queryURL = this.getURL(sourceIataCode, destinationIataCode, startDate, endDate, page);
      $http({ method: 'get', url: queryURL, cache: false }).then(
        this.onFindFlightsCompleted.bind(this, deferred),
        this.onFindFlightsFailed.bind(this, deferred)
      );
    }

    return deferred.promise;
  };

  this.onFindFlightsCompleted = (deferred, response) => {
    deferred.resolve(response.flights);
  };

  this.onFindFlightsFailed = (deferred, response) => {
    deferred.reject(response);
  };
}
