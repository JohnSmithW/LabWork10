import React from 'react';
import './GiphyListItem.css';

export default function GiphyListItem(props) {
  return (
    <div className="list-item">
      <img src={props.url} alt="" className="gif-container"></img>
      <div className="info-container">
        <span className="info-container__label">{props.label}</span>
        <span onClick={props.goTo} className="info-container__url">
          {props.url}
        </span>
      </div>
    </div>
  );
}
