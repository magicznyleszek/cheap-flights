export default function AirportSelectorController($element, $timeout) {
  'ngInject';

  this.isActive = false;
  this.filterValue = '';
  this.selected = null;

  this.startSelection = () => {
    this.isActive = true;
    $timeout(() => { $element[0].querySelector('[js-airport-selector-filter]').focus(); });
  };

  this.endSelection = () => {
    this.isActive = false;
    this.filterValue = '';
  };

  this.selectAirport = (airportId) => {
    const selectedAirport = this.airports.filter(airport => airport.id === airportId)[0];
    this.selected = selectedAirport || null;
    this.onSelectedChange({ airport: this.selected });
    this.endSelection();
  };

  this.filteredAirports = () => this.airports.filter(airport =>
    airport.label.toLowerCase().startsWith(this.filterValue.toLowerCase()));

  this.onKeyup = ($event) => {
    if ($event.key === 'Escape') {
      this.endSelection();
    }
  };
}
