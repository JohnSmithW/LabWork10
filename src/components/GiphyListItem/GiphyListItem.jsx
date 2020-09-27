import React from 'react';
import { PropTypes } from 'prop-types';
import './GiphyListItem.css';

export default function GiphyListItem(props) {
  return (
    <React.StrictMode>
      <div className="list-item">
        <img src={props.url} alt="" className="gif-container"></img>
        <div className="info-container">
          <span className="info-container__label">{props.label}</span>
          <span onClick={props.goTo} className="info-container__url">
            {props.url}
          </span>
        </div>
      </div>
    </React.StrictMode>
  );
}

GiphyListItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  goTo: PropTypes.func.isRequired,
};
