import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { deleteSavedSearch } from "../actions/imageActions";
import PropTypes from "prop-types";

export class SavedSearchItem extends Component {
  deleteItem = () => {
    this.props.deleteSavedSearch(this.props.item.savedKeyword);
  };
  render() {
    const item = this.props.item;

    return (
      <li className="saved-search-item">
        <span className="saved-keyword m-auto">{item.savedKeyword}</span>
        <span className="saved-total-images text-center m-auto">
          {item.savedTotalImages} images
        </span>
        <button className="delete-saved-search" onClick={this.deleteItem}>
          <FontAwesomeIcon icon="times" />
        </button>
      </li>
    );
  }
}

SavedSearchItem.propTypes = {
  deleteSavedSearch: PropTypes.func
};

export default connect(
  null,
  { deleteSavedSearch }
)(SavedSearchItem);
