export default function AirportSelectorController($element, $timeout) {
  'ngInject';

  this.isActive = false;
  this.filterValue = '';
  this.selected = null;
  this.airports = [
    { label: 'Lisbon', id: 'lsb' },
    { label: 'Warsaw', id: 'waw' }
  ];

  this.startSelection = () => {
    this.isActive = true;
    $timeout(() => { $element[0].querySelector('[js-airport-selector-filter]').focus(); });
    console.log(this, $element[0].querySelector('[js-airport-selector-filter]'));
  };

  this.endSelection = () => {
    this.isActive = false;
    this.filterValue = '';
  };

  this.selectAirport = (airportId) => {
    const selectedAirport = this.airports.filter(airport => airport.id === airportId)[0];
    this.selected = selectedAirport || null;
    this.endSelection();
  };

  this.filteredAirports = () => this.airports.filter(airport =>
    airport.label.toLowerCase().startsWith(this.filterValue.toLowerCase()));
}
