import template from './search-wrapper.component.html';
import controller from './search-wrapper.controller';
import './search-wrapper.component.scss';

const SearchWrapperComponent = {
  bindings: {
    onSubmit: '&'
  },
  template,
  controller
};

export default SearchWrapperComponent;
