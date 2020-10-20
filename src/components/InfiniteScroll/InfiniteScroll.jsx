import React from 'react';
import { PropTypes } from 'prop-types';
import './InfiniteScroll.css';

export default function InfiniteScroll(props) {
  return (
    <div onScroll={props.scroll} className="scroll-container custom-scroll">
      {props.children}
    </div>
  );
}

InfiniteScroll.propTypes = {
  scroll: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};
