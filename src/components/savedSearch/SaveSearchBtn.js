import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveSearch } from "../../actions/imageActions";

export class SaveSearchBtn extends Component {
  saveSearch = () => {
    this.props.saveSearch();
  };
  render() {
    return (
      <button className="btn" onClick={this.saveSearch}>
        <FontAwesomeIcon icon="save" />
        <span className="btn-text">Save Search</span>
      </button>
    );
  }
}

export default connect(
  null,
  { saveSearch }
)(SaveSearchBtn);
