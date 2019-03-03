import React from "react";
import { connect } from "react-redux";
import { openImageModal } from "./../../actions/imageActions";

export function Image(props) {
  const image = props.image;
  return (
    <div className="image-flex-container">
      <img
        className="single-photo"
        src={image.urls.raw + "&w=300&h=280"}
        alt={image.description}
        onClick={() => props.openImageModal(props.image.id)}
      />
    </div>
  );
}

export default connect(
  null,
  { openImageModal }
)(Image);
