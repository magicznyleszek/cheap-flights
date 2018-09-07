import moment from 'moment';

export default function SearchWrapperController(AirportsService, SearchParamsService) {
  'ngInject';

  this.$onInit = () => {
    AirportsService.getAirportsAsync().then(
      (airports) => {
        this.sourceAirports = airports;
        this.readURLParams();
      }
    );
  };

  this.readURLParams = () => {
    const source = SearchParamsService.getParam('source');
    const dest = SearchParamsService.getParam('dest');
    const from = SearchParamsService.getParam('from');
    const to = SearchParamsService.getParam('to');

    if (source) { this.onSourceChange(source); }
    if (dest) { this.onDestinationChange(dest); }
    if (from) { this.onStartDateChange(new Date(from)); }
    if (to) { this.onEndDateChange(new Date(to)); }

    if (source || dest || from || to) {
      this.onSafeSubmit();
    }
  };

  this.setURLParams = () => {
    if (this.sourceIataCode) { SearchParamsService.setParam('source', this.sourceIataCode); }
    if (this.destinationIataCode) { SearchParamsService.setParam('dest', this.destinationIataCode); }
    if (this.startDate) {
      SearchParamsService.setParam('from', moment(this.startDate).format('YYYY-MM-DD'));
    }
    if (this.endDate) {
      SearchParamsService.setParam('to', moment(this.endDate).format('YYYY-MM-DD'));
    }
  };

  this.getSearchSubmitParams = () => ({
    sourceIataCode: this.sourceIataCode,
    destinationIataCode: this.destinationIataCode,
    startDate: moment(this.startDate).format('YYYY-MM-DD'),
    endDate: moment(this.endDate).format('YYYY-MM-DD')
  });

  this.onSafeSubmit = () => {
    const isValid = this.checkValidity();
    if (isValid) {
      this.onSubmit({ params: this.getSearchSubmitParams() });
      this.setURLParams();
    }
  };

  this.checkValidity = () => {
    let isValid = true;
    this.sourceError = null;
    this.destinationError = null;
    this.startDateError = null;
    this.endDateError = null;

    if (this.sourceIataCode === null) {
      this.sourceError = 'Choose your airport!';
      isValid = false;
    }
    if (this.destinationIataCode === null) {
      this.destinationError = 'Plane needs to land!';
      isValid = false;
    }
    if (this.startDate === null) {
      this.startDateError = 'Pick start date!';
      isValid = false;
    }
    if (this.endDate === null) {
      this.endDateError = 'Pick end date!';
      isValid = false;
    }

    return isValid;
  };

  this.sourceIataCode = null;
  this.sourceError = null;
  this.sourceAirports = [];
  this.onSourceChange = (iataCode) => {
    this.sourceIataCode = iataCode;
    this.destinationIataCode = null;
    this.sourceError = null;
    this.destinationAirports = AirportsService.getAirportDestinations(this.sourceIataCode);
  };

  this.destinationIataCode = null;
  this.destinationError = null;
  this.destinationAirports = [];
  this.onDestinationChange = (iataCode) => {
    this.destinationIataCode = iataCode;
    this.destinationError = null;
  };

  this.startDate = null;
  this.startDateError = null;
  this.onStartDateChange = (date) => {
    this.startDate = date;
    this.startDateError = null;
    this.fixDates();
  };

  this.endDate = null;
  this.endDateError = null;
  this.onEndDateChange = (date) => {
    this.endDate = date;
    this.endDateError = null;
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
