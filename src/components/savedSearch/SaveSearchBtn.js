import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveSearch } from "../../actions/imageActions";

export function SaveSearchBtn(props) {
  return (
    <button className="btn" onClick={() => props.saveSearch()}>
      <FontAwesomeIcon icon="save" />
      <span className="btn-text">Save Search</span>
    </button>
  );
}

export default connect(
  null,
  { saveSearch }
)(SaveSearchBtn);
