import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SavedSearchItem from "./SavedSearchItem";
import SaveSearchBtn from "./SaveSearchBtn";
import { toggleMobSavedPopup } from "../../actions/imageActions";
import MobileBottomLine from "./MobileBottomLine";
export function SavedSearchList(props) {
  const savedSearch = props.image.savedSearchList;
  return (
    <>
      <div
        className={
          "saved-search-container" +
          (props.image.isMobSavedVisible ? " active" : " ")
        }
      >
        <div className="saved-search-inner-container">
          <button
            className="close-mob-saved"
            onClick={() => {
              props.toggleMobSavedPopup();
            }}
          >
            <FontAwesomeIcon icon="times" size="2x" />
          </button>
          <h2 className="text-center title">Saved Search</h2>
          {savedSearch.length > 0 ? (
            <ul className="saved-search-list">
              {savedSearch.map(search => (
                <SavedSearchItem key={search.savedKeyword} item={search} />
              ))}
            </ul>
          ) : (
            <div className="py-5 text-center opacity-half">
              {/* <FontAwesomeIcon icon="save" size="3x" /> */}

              <p>Empty Saved Search List</p>
            </div>
          )}
          {props.image.isFirstLoad && props.image.totalImages !== 0 && (
            <SaveSearchBtn />
          )}
        </div>
      </div>
      <MobileBottomLine />
    </>
  );
}

const mapStateToProps = state => ({
  image: state.image
});
export default connect(
  mapStateToProps,
  { toggleMobSavedPopup }
)(SavedSearchList);
