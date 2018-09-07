import ryanairLogoSVG from '../../images/ryanair-logo.svg';

export default function GlobalMenuController($state) {
  'ngInject';

  this.ryanairLogoSVG = ryanairLogoSVG;

  this.goHome = () => {
    $state.go('home');
  };
}
