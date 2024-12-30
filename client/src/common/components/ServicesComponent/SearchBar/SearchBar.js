import React from 'react';
import SvgIcons from './SvgIcons';
import './SearchBar.css';
import useStore from '../../../store/useStore';

const SearchBar = () => {
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const setFilter = useStore((state) => state.setFilter);
  const filter = useStore((state) => state.filter);

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="buttons-container">
      <button
          className={`icon-button ${filter === null ? 'active' : ''}`}
          onClick={() => handleFilterClick(null)}
        >
          All services
        </button>
        <button
          className={`icon-button ${filter === 'administrative' ? 'active' : ''}`}
          onClick={() => handleFilterClick('administrative')}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <use xlinkHref="#new-administrative" />
          </svg>
          Administrative
        </button>
        <button
          className={`icon-button ${filter === 'personal-assistance' ? 'active' : ''}`}
          onClick={() => handleFilterClick('personal-assistance')}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <use xlinkHref="#assistance" />
          </svg>
          Assistance
        </button>
        <button
          className={`icon-button ${filter === 'Livraison' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Livraison')}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <use xlinkHref="#livraison" />
          </svg>
          Livraison
        </button>
      </div>
      <div className="search">
        <input type="text" placeholder="search" onChange={handleSearchChange} />
        <div className="symbol">
          <svg className="cloud">
            <use xlinkHref="#cloud" />
          </svg>
          <svg className="lens">
            <use xlinkHref="#lens" />
          </svg>
        </div>
      </div>
      <SvgIcons />
    </div>
  );
};

export default SearchBar;
