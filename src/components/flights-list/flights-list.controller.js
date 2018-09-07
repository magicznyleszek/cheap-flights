import moment from 'moment';
import planeSVG from '../../images/plane.svg';

export default function FlightsListController() {
  this.planeSVG = planeSVG;
  this.getHumanDate = dateString => moment(dateString).format('dddd lll');
  this.getHumanPrice = (price, currency) => {
    // TODO: given better API response (currency code) and application language
    // we should use Intl.NumberFormat
    const roundedPrice = Number(price).toFixed(2);
    return `${roundedPrice} ${currency}`;
  };
}
