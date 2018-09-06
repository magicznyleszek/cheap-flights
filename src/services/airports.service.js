/*
This service works on assumption that you require API data to know airports and
that API data doesn't change during lifetime of the application
*/

export default function AirportsService($q, $http) {
  'ngInject';

  const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';
  let APIData = null;

  this.getAPIData = () => $http({ method: 'get', url: baseURL, cache: true });

  this.getAirportsAsync = () => {
    const deferred = $q.defer();

    if (APIData !== null) {
      deferred.resolve(APIData.airports);
    } else {
      this.getAPIData().then(
        this.onGetAPIDataCompleted.bind(this, deferred),
        this.onGetAPIDataFailed.bind(this, deferred)
      );
    }

    return deferred.promise;
  };

  this.onGetAPIDataCompleted = (deferred, response) => {
    APIData = response.data;
    deferred.resolve(response.data.airports);
  };

  this.onGetAPIDataFailed = (deferred, response) => {
    deferred.reject(response);
    throw new Error('Failed getting Airports API Data!');
  };

  this.getAirportDestinations = (iataCode) => {
    if (APIData === null) {
      throw new Error('Airports API Data not ready yet!');
    }
    const destinations = [];
    APIData.routes[iataCode].forEach((routeIataCode) => {
      destinations.push(APIData.airports.find(airport => airport.iataCode === routeIataCode));
    });
    return destinations;
  };
}
