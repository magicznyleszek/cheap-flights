export default function ResultsPageController() {
  'ngInject';

  this.onSearchSubmit = (params) => {
    console.log('onSearchSubmit', params);
    this.findFlights(params);
  };

  this.findFlights = (params) => {
    console.log('findFlights', params);
  }
}
