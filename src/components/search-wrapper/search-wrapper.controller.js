export default function AirportSelectorController() {
  this.sourceAirports = [
    { label: 'Lisbon', id: 'lsb' },
    { label: 'Warsaw', id: 'waw' }
  ];
  this.destinationAirports = [
    { label: 'Paris', id: 'prs' },
    { label: 'London', id: 'lnd' }
  ];
  this.onSourceChange = (airport) => {
    console.log('onSourceChange', airport);
  };
  this.onDestinationChange = (airport) => {
    console.log('onDestinationChange', airport);
  };
}
