export default function AirportSelectorController($element, $timeout, $scope) {
  'ngInject';

  this.isActive = false;
  this.filterValue = '';

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
    this.onSelectedChange({ airportId });
    this.deactivate();
  };

  this.getSelectedAirportLabel = () => {
    const selectedAirport = this.airports.filter(airport => airport.id === this.selectedId)[0];
    return selectedAirport ? selectedAirport.label : null;
  };

  this.filteredAirports = () => this.airports.filter(airport =>
    airport.label.toLowerCase().startsWith(this.filterValue.toLowerCase()));

  this.onOptionKeyup = ($event, airportId) => {
    if ($event.key === 'Enter') {
      this.selectAirport(airportId);
    }
  };

  this.onSelectKeyup = ($event) => {
    if ($event.key === 'Escape') {
      this.deactivate();
    }
    // close selector if tabbing out of it
    if ($event.key === 'Tab') {
      this.checkOutsideClose($event);
    }
  };

  this.onInputFocus = () => {
    if (!this.isActive) {
      this.activate();
    }
  };

  this.onFocusableChildBlur = ($event) => {
    if (!$element[0].contains($event.relatedTarget)) {
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
