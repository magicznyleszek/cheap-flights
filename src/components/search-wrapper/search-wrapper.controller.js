import moment from 'moment';

export default function SearchWrapperController(AirportsService) {
  'ngInject';

  this.$onInit = () => {
    AirportsService.getAirportsAsync().then(
      this.onGetAirportsCompleted.bind(this)
    );
  };

  this.onGetAirportsCompleted = (airports) => {
    console.log('onGetAirportsCompleted', airports);
  }

  this.onGetAirportsFailed = (response) => {
    console.log(response);
  }

  this.findFlights = () => {
    console.log('findFlights');
  };

  this.sourceIataCode = null;
  this.sourceAirports = [
    { name: 'Lisbon', iataCode: 'lsb' },
    { name: 'Warsaw', iataCode: 'waw' }
  ];
  this.onSourceChange = (iataCode) => {
    this.sourceIataCode = iataCode;
    console.log('onSourceChange', iataCode);
  };

  this.destinationIataCode = null;
  this.destinationAirports = [
    { name: 'Airport1', iataCode: 'ai1' },
    { name: 'Airport2', iataCode: 'ai2' },
    { name: 'Airport3', iataCode: 'ai3' },
    { name: 'Airport4', iataCode: 'ai4' },
    { name: 'Airport5', iataCode: 'ai5' },
    { name: 'Airport6', iataCode: 'ai6' },
    { name: 'Airport7', iataCode: 'ai7' },
    { name: 'Airport8', iataCode: 'ai8' },
    { name: 'Airport9', iataCode: 'ai9' },
    { name: 'Paris', iataCode: 'prs' },
    { name: 'London', iataCode: 'lnd' }
  ];
  this.onDestinationChange = (iataCode) => {
    this.destinationIataCode = iataCode;
    console.log('onDestinationChange', iataCode);
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
