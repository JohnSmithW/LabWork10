import React from 'react';
import './css/main.css';
import GiphyList from './components/GiphyList/GiphyList';
import Search from './components/Search/Search';

export default function App() {
  return (
    <div className="main">
      <GiphyList content={<Search />} />
    </div>
  );
}
