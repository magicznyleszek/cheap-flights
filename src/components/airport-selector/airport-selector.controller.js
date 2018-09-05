export default function AirportSelectorController($element, $timeout, $scope) {
  'ngInject';

  this.isActive = false;
  this.filterValue = '';
  this.selected = null;

  // TODO: keyboard navigation up/down arrows and ENTER key with scrollIntoViewIfNeeded

  this.activate = () => {
    this.isActive = true;
    document.addEventListener('click', this.checkOutsideCloseBound);
    $timeout(() => { $element[0].querySelector('[js-airport-selector-filter]').focus(); });
  };

  this.deactivate = () => {
    this.isActive = false;
    document.removeEventListener('click', this.checkOutsideCloseBound);
    this.filterValue = '';
  };

  this.selectAirport = (airportId) => {
    const selectedAirport = this.airports.filter(airport => airport.id === airportId)[0];
    this.selected = selectedAirport || null;
    this.onSelectedChange({ airport: this.selected });
    this.deactivate();
  };

  this.filteredAirports = () => this.airports.filter(airport =>
    airport.label.toLowerCase().startsWith(this.filterValue.toLowerCase()));

  this.onKeyup = ($event) => {
    if ($event.key === 'Escape') {
      this.deactivate();
    }
  };

  this.checkOutsideClose = (evt) => {
    if ($element !== evt.target && !$element[0].contains(evt.target)) {
      $scope.$apply(this.deactivate);
    }
  };

  this.checkOutsideCloseBound = this.checkOutsideClose.bind(this);
}
