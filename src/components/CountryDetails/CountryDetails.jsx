import React, { Component } from 'react';
import AllCountries from '../../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  render() {
    const {
      match: {
        params: { cca3 },
      },
    } = this.props;
    const filteredCountry = AllCountries.find((country) => {
      return country.cca3 === this.props.match.params.cca3;
    });
    return (
      <div className="col-7" style={{ margin: '0' }}>
        <h1>{filteredCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{filteredCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {filteredCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {filteredCountry.borders.map((eachBorder) => {
                    return (
                      <li>
                        <Link to={`/${eachBorder}`}>
                          {
                            AllCountries.find((country) => {
                              return country.cca3 === eachBorder;
                            }).name.official
                          }
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
