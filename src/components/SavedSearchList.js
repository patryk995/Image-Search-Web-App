import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SavedSearchItem from "./SavedSearchItem";
export class SavedSearchList extends Component {
  render() {
    const savedSearch = this.props.image.savedSearchList;
    return (
      <div className="saved-search-container">
        <div className="saved-search-inner-container">
          <h2 className="text-center title">Saved Search</h2>
          {savedSearch.length > 0 ? (
            <ul className="saved-search-list">
              {savedSearch.map(search => (
                <SavedSearchItem key={search.savedKeyword} item={search} />
              ))}
            </ul>
          ) : (
            <div className="py-5 text-center opacity-half m-auto">
              <FontAwesomeIcon icon="save" size="3x" />

              <p>Empty Saved Search List</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.image
});
export default connect(mapStateToProps)(SavedSearchList);
