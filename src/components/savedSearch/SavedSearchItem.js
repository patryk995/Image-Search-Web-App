import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { deleteSavedSearch, loadSavedSearch } from "../../actions/imageActions";
import PropTypes from "prop-types";

export class SavedSearchItem extends Component {
  deleteItem = () => {
    this.props.deleteSavedSearch(this.props.item.savedKeyword);
  };
  loadSavedSearch = () => {
    this.props.loadSavedSearch(this.props.item);
  };
  render() {
    const item = this.props.item;

    return (
      <li className="saved-search-item">
        <span className="saved-keyword m-auto">
          <button className="load-saved-search" onClick={this.loadSavedSearch}>
            {item.savedKeyword}
          </button>
        </span>
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
  deleteSavedSearch: PropTypes.func,
  loadSavedSearch: PropTypes.func
};

export default connect(
  null,
  { deleteSavedSearch, loadSavedSearch }
)(SavedSearchItem);
