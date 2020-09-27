import React from 'react';
import './InfiniteScroll.css';

export default function InfiniteScroll(props) {
  return (
    <div onScroll={props.scroll} className="list-container custom-scroll">
      {props.children}
    </div>
  );
}
