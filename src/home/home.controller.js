export default function HomePageController($state) {
  'ngInject';

  this.onSearchSubmit = (params) => {
    $state.go('results', {
      source: params.sourceIataCode,
      dest: params.destinationIataCode,
      from: params.startDate,
      to: params.endDate
    });
  };
}
