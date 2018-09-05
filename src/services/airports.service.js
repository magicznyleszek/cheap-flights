/*
This service works on assumption that you require API data to know airports and
that API data doesn't change during lifetime of the application
*/

export default function AirportsService($q, $http) {
  'ngInject';

  const apiURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';
  let apiData = null;

  this.getAPIData = () => $http({ method: 'get', url: apiURL, cache: true });

  this.getAirportsAsync = () => {
    const deferred = $q.defer();

    if (apiData !== null) {
      deferred.resolve(apiData.airports);
    } else {
      this.getAPIData().then(
        this.onGetAPIDataCompleted.bind(this, deferred),
        this.onGetAPIDataFailed.bind(this, deferred)
      );
    }

    return deferred.promise;
  };

  this.onGetAPIDataCompleted = (deferred, response) => {
    apiData = response.data;
    deferred.resolve(response.data.airports);
  };

  this.onGetAPIDataFailed = (deferred, response) => {
    throw new Error('Failed getting Airports API Data!');
    deferred.reject(response);
  };

  this.getAirportDestinations = (iataCode) => {
    if (apiData === null) {
      throw new Error('Airports API Data not ready yet!');
    }
    const destinations = [];
    apiData.routes[iataCode].forEach((routeIataCode) => {
      destinations.push(apiData.airports.find(airport => airport.iataCode === routeIataCode));
    });
    return destinations;
  };
}
