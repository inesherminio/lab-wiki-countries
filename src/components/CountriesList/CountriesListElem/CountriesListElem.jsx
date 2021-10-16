import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesListElem.css';

function CountriesListElem({
  eachCountry: {
    name: { common },
    cca2,
    cca3,
  },
}) {
  return (
    <div className="list-group-item list-group-item-action">
      <Link to={`/${cca3}`}>
        <img
          src={`https://www.countryflags.io/${cca2.toLowerCase()}/flat/64.png`}
          alt="country flag"
          width="20px"
          className="list-flag"
        />
        <p className="list-name">{common}</p>
      </Link>
    </div>
  );
}

export default CountriesListElem;
