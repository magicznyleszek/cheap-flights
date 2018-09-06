import moment from 'moment';

export default function SearchWrapperController(AirportsService, $location) {
  'ngInject';

  this.$onInit = () => {
    AirportsService.getAirportsAsync().then(
      (airports) => {
        this.sourceAirports = airports;
        this.readUrlParams();
      }
    );
  };

  this.readUrlParams = () => {
    const params = $location.search();

    if (params.source) { this.onSourceChange(params.source); }
    if (params.dest) { this.onDestinationChange(params.dest); }
    if (params.from) { this.onStartDateChange(new Date(params.from)); }
    if (params.to) { this.onEndDateChange(new Date(params.to)); }

    if (params.source || params.dest || params.from || params.to) {
      this.onSafeSubmit();
    }
  };

  this.getSearchSubmitParams = () => ({
    sourceIataCode: this.sourceIataCode,
    destinationIataCode: this.destinationIataCode,
    startDate: this.startDate,
    endDate: this.endDate
  });

  this.onSafeSubmit = () => {
    // TODO verify form and display errors
    const isValid = true;
    if (isValid) {
      this.onSubmit({ params: this.getSearchSubmitParams() });
    }
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
