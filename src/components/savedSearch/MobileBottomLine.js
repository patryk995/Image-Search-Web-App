import React from "react";
import { connect } from "react-redux";
import { toggleMobSavedPopup } from "../../actions/imageActions";
export function MobileBottomLine(props) {
  return (
    <div className="mobile-bottom-line">
      <div className="mobile-line-inner">
        <button
          className="btn"
          onClick={() => {
            props.toggleMobSavedPopup();
          }}
        >
          Open Saved Search
        </button>
      </div>
    </div>
  );
}
export default connect(
  null,
  { toggleMobSavedPopup }
)(MobileBottomLine);
