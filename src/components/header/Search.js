import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getImages } from "../../actions/imageActions";
export class Search extends Component {
  state = {
    keyword: ""
  };

  onSubmit = () => {
    if (this.state.keyword !== "") {
      this.props.getImages(this.state.keyword, 1);
    }
  };
  onChange = e => {
    this.setState({ keyword: e.target.value });
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmit();
    }
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
          onKeyPress={this.handleKeyPress}
        />
        <button id="searchSubmit" className="btn" onClick={this.onSubmit}>
          <FontAwesomeIcon icon="search" />
          <span className="btn-text mobile-hidden">Search</span>
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
