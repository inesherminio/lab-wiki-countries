import React from 'react';
import AllCountries from '../../countries.json';
import CountriesListElem from './CountriesListElem/CountriesListElem';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {AllCountries.map((eachCountry) => {
          return <CountriesListElem eachCountry={eachCountry} />;
        })}
      </div>
    </div>
  );
}

export default CountriesList;
