export default function AirportsService($http) {
  'ngInject';

  this.apiURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';

  this.getAirports = () => $http({ method: 'get', url: this.apiURL, cache: true });
}
