export default function MainMenuController($state) {
  'ngInject';

  this.goHome = () => {
    $state.go('home');
  };
}
