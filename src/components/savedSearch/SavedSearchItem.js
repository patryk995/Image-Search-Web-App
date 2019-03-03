import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { deleteSavedSearch, loadSavedSearch } from "../../actions/imageActions";
import PropTypes from "prop-types";

export function SavedSearchItem(props) {
  const item = props.item;
  return (
    <li className="saved-search-item">
      <span className="saved-keyword m-auto">
        <button
          className="load-saved-search"
          onClick={() => {
            props.loadSavedSearch(props.item);
          }}
        >
          {item.savedKeyword}
        </button>
      </span>
      <span className="saved-total-images text-center m-auto">
        {item.savedTotalImages} images
      </span>
      <button
        className="delete-saved-search"
        onClick={() => {
          props.deleteSavedSearch(props.item.savedKeyword);
        }}
      >
        <FontAwesomeIcon icon="times" />
      </button>
    </li>
  );
}

SavedSearchItem.propTypes = {
  deleteSavedSearch: PropTypes.func,
  loadSavedSearch: PropTypes.func
};

export default connect(
  null,
  { deleteSavedSearch, loadSavedSearch }
)(SavedSearchItem);
