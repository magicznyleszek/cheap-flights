import moment from 'moment';

export default function FlightsListController() {
  this.getHumanDate = dateString => moment(dateString).format('LLLL');
}
