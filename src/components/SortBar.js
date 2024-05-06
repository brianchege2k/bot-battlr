// SortBar.js

import React from 'react';

const SortBar = ({ sortBots }) => {
  const handleSort = (criteria) => {
    sortBots(criteria);
  };

  return (
    <div className="mb-3">
      <h3>Sort By:</h3>
      <div className="btn-group" role="group" aria-label="Sort By">
        <button type="button" className="btn btn-primary mr-2" onClick={() => handleSort('health')}>Health</button>
        <button type="button" className="btn btn-primary mr-2" onClick={() => handleSort('damage')}>Damage</button>
        <button type="button" className="btn btn-primary" onClick={() => handleSort('armor')}>Armor</button>
      </div>
    </div>
  );
};

export default SortBar;
