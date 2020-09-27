import state from '../store';

export default function getInputValue(event) {
  state.searchInputValue = event.target.value;
}
