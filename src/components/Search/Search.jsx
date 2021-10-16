import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.props.handleFilter(value);
  };
  render() {
    const { search } = this.state;
    return (
      <div>
        <input
          className="form-control"
          style={{ marginBottom: '10px' }}
          type="text"
          name="search"
          placeholder="Search a country..."
          value={search}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
