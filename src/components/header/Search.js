import React, { Component } from "react";

export class Search extends Component {
  state = {
    keyword: ""
  };
  onChange = e => {
    this.setState({ keyword: e.target.value });
  };
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="searchInput"
          placeholder="Search Image..."
          value={this.state.keyword}
          onChange={this.onChange}
        />
        <button type="submit" id="searchSubmit">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
