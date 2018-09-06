export default function SearchParamsService($location, $state, $stateParams) {
  'ngInject';

  this.getParam = name => $location.search()[name];

  // sets url params without causing reloads
  this.setParam = (name, value) => {
    $stateParams[name] = value;
    $state.params[name] = value;
    $location.search(name, value);
  };
}
