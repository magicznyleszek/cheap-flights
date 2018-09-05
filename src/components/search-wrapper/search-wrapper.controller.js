import moment from 'moment';

export default function SearchWrapperController(AirportsService) {
  'ngInject';

  this.$onInit = () => {
    AirportsService.getAirportsAsync().then(
      (airports) => {
        this.sourceAirports = airports;
      }
    );
  };

  this.findFlights = () => {
    console.log('findFlights');
  };

  this.sourceIataCode = null;
  this.sourceAirports = [];
  this.onSourceChange = (iataCode) => {
    this.sourceIataCode = iataCode;
    this.destinationIataCode = null;
    this.destinationAirports = AirportsService.getAirportDestinations(this.sourceIataCode);
  };

  this.destinationIataCode = null;
  this.destinationAirports = [];
  this.onDestinationChange = (iataCode) => {
    this.destinationIataCode = iataCode;
  };

  this.startDate = null;
  this.onStartDateChange = (date) => {
    this.startDate = date;
    this.fixDates();
  };

  this.endDate = null;
  this.onEndDateChange = (date) => {
    this.endDate = date;
    this.fixDates();
  };

  this.fixDates = () => {
    if (moment(this.startDate) > moment(this.endDate)) {
      this.endDate = moment(this.startDate).add(2, 'd').toDate();
    }
    if (moment(this.endDate) < moment(this.startDate)) {
      this.startDate = moment(this.endDate).subtract(2, 'd').toDate();
    }
  };
}
