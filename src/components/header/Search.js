import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getImages } from "../../actions/imageActions";
export class Search extends Component {
  state = {
    keyword: ""
  };

  onSubmit = () => {
    console.log("clicked");
    this.props.getImages(this.state.keyword, 1, 30);
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
        <button id="searchSubmit" onClick={this.onSubmit}>
          Search
        </button>
      </div>
    );
  }
}
Search.propTypes = {
  getImages: PropTypes.func
};

export default connect(
  null,
  { getImages }
)(Search);
