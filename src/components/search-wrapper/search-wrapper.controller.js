import moment from 'moment';

export default function SearchWrapperController() {
  this.findFlights = () => {
    console.log('findFlights');
  };

  this.sourceId = null;
  this.sourceAirports = [
    { label: 'Lisbon', id: 'lsb' },
    { label: 'Warsaw', id: 'waw' }
  ];
  this.onSourceChange = (airportId) => {
    this.sourceId = airportId;
    console.log('onSourceChange', airportId);
  };

  this.destinationId = null;
  this.destinationAirports = [
    { label: 'Airport1', id: 'ai1' },
    { label: 'Airport2', id: 'ai2' },
    { label: 'Airport3', id: 'ai3' },
    { label: 'Airport4', id: 'ai4' },
    { label: 'Airport5', id: 'ai5' },
    { label: 'Airport6', id: 'ai6' },
    { label: 'Airport7', id: 'ai7' },
    { label: 'Airport8', id: 'ai8' },
    { label: 'Airport9', id: 'ai9' },
    { label: 'Paris', id: 'prs' },
    { label: 'London', id: 'lnd' }
  ];
  this.onDestinationChange = (airportId) => {
    this.destinationId = airportId;
    console.log('onDestinationChange', airportId);
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
