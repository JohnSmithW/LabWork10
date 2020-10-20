import React from 'react';
import { PropTypes } from 'prop-types';
import './GiphyListItem.css';

export default function GiphyListItem({ url, label, goTo }) {
  return (
    <div className="list-item">
      <img src={url} alt="" className="gif-container"></img>
      <div className="info-container">
        <span className="info-container__label">{label}</span>
        <span onClick={goTo} className="info-container__url">
          {url}
        </span>
      </div>
    </div>
  );
}

GiphyListItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  goTo: PropTypes.func.isRequired,
};
