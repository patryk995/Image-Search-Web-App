import React, { Component } from "react";
import { connect } from "react-redux";

export class SavedSearchList extends Component {
  render() {
    if (this.props.image.isFirstLoad) {
      const savedSearch = this.props.image.savedSearchList;
      return (
        <div className="saved-search-list">
          {savedSearch.map(search => (
            <p>smile</p>
          ))}
        </div>
      );
    }
    return <div>Empty saved search list.</div>;
  }
}

const mapStateToProps = state => ({
  image: state.image
});
export default connect(mapStateToProps)(SavedSearchList);
