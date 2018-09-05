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

  this.selectAirport = (iataCode) => {
    this.onSelectedChange({ iataCode });
    this.deactivate();
  };

  this.getSelectedAirportName = () => {
    const selectedAirport = this.airports.filter(airport => airport.iataCode === this.selectedIataCode)[0];
    return selectedAirport ? selectedAirport.name : null;
  };

  this.filteredAirports = () => this.airports.filter(airport =>
    airport.name.toLowerCase().startsWith(this.filterValue.toLowerCase()));

  this.onOptionKeyup = ($event, iataCode) => {
    if ($event.key === 'Enter') {
      this.selectAirport(iataCode);
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
