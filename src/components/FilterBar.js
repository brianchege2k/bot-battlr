import React, { useState } from 'react';

const FilterBar = ({ filterBots }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilter = (botClass) => {
    let updatedFilters = [...selectedFilters];
    if (selectedFilters.includes(botClass)) {
      updatedFilters = updatedFilters.filter(filter => filter !== botClass);
    } else {
      updatedFilters.push(botClass);
    }
    setSelectedFilters(updatedFilters);
    filterBots(updatedFilters);
  };

  return (
    <div className="container">
      <div className="btn-group my-4">
        <button className={`btn btn-secondary ${selectedFilters.includes('Support') && 'active'}`} onClick={() => handleFilter('Support')}>Support</button>
        <button className={`btn btn-secondary ${selectedFilters.includes('Medic') && 'active'}`} onClick={() => handleFilter('Medic')}>Medic</button>
        <button className={`btn btn-secondary ${selectedFilters.includes('Assault') && 'active'}`} onClick={() => handleFilter('Assault')}>Assault</button>
        <button className={`btn btn-secondary ${selectedFilters.includes('Defender') && 'active'}`} onClick={() => handleFilter('Defender')}>Defender</button>
        <button className={`btn btn-secondary ${selectedFilters.includes('Captain') && 'active'}`} onClick={() => handleFilter('Captain')}>Captain</button>
        <button className={`btn btn-secondary ${selectedFilters.includes('Witch') && 'active'}`} onClick={() => handleFilter('Witch')}>Witch</button>
      </div>
    </div>
  );
};

export default FilterBar;
