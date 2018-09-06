export default function ResultsPageController(CheapFlightsService) {
  'ngInject';

  this.flights = [];
  this.currentPage = 0;
  this.isLoading = true;
  this.currentParams = null;

  this.onLoadNextPage = () => {
    this.currentPage += 1;
    this.loadFlights(this.currentPage);
  };

  this.onSearchSubmit = (params) => {
    this.currentParams = params;
    this.clearData();
    this.loadFlights(this.currentPage);
  };

  this.clearData = () => {
    this.flights = [];
    this.currentPage = 0;
    this.isLoading = true;
  };

  this.loadFlights = (page) => {
    this.isLoading = true;
    CheapFlightsService.findFlights(
      this.currentParams.sourceIataCode,
      this.currentParams.destinationIataCode,
      this.currentParams.startDate,
      this.currentParams.endDate,
      page
    ).then(
      this.onFindFlightsCompleted.bind(this),
      this.onFindFlightsFailed.bind(this)
    );
  };

  this.onFindFlightsCompleted = (flights) => {
    this.isLoading = false;
    this.flights = this.flights.concat(flights);
  };

  this.onFindFlightsFailed = () => {
    this.isLoading = false;
    this.currentPage -= 1;
  };
}
