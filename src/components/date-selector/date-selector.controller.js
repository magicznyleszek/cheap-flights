export default function DateSelectorController() {
  this.onInputChange = () => {
    this.onDateChange({ date: this.date });
  };
}
