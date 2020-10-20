import state from '../store';

export default function setInputValue(event) {
  state.searchInputValue = event.target.value;
}
