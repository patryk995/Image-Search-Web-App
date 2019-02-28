import React, { Component } from "react";
import { connect } from "react-redux";

export class SavedSearchList extends Component {
  render() {
    const savedSearch = this.props.image.savedSearchList;
    return (
      <div className="saved-search-container">
        <div className="saved-search-inner-container">
          <h3 className="text-center">Saved Search</h3>
          {savedSearch.length > 0 ? (
            <ul className="saved-search-list">
              {savedSearch.map(search => (
                <li key={search.savedKeyword}>{search.savedKeyword}</li>
              ))}
            </ul>
          ) : (
            <div className="py-5 text-center opacity-half m-auto">
              <p>Empty saved search list.</p>
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
