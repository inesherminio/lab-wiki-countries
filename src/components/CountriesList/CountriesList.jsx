import React, { Component } from 'react';
import AllCountries from '../../countries.json';
import CountriesListElem from './CountriesListElem/CountriesListElem';
import Search from '../Search/Search';

class CountriesList extends Component {
  state = {
    countriesList: AllCountries,
    filteredList: AllCountries,
  };
  handleFilter = (filter) => {
    const newList = this.state.countriesList.filter((country) => {
      return country.name.common.toLowerCase().includes(filter.toLowerCase());
    });
    this.setState({ filteredList: newList });
  };
  render() {
    const { countriesList, filteredList } = this.state;
    return (
      <div className="col-5">
        <Search handleFilter={this.handleFilter} />
        <div style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <div className="list-group">
            {filteredList.map((eachCountry) => {
              return <CountriesListElem eachCountry={eachCountry} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
