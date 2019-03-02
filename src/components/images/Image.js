import React, { Component } from "react";
import { connect } from "react-redux";
import { openImageModal } from "./../../actions/imageActions";

export class Image extends Component {
  openFullImage = () => {
    this.props.openImageModal(this.props.image.id);
  };
  render() {
    const image = this.props.image;
    return (
      <div className="image-flex-container">
        <img
          className="single-photo"
          src={image.urls.raw + "&w=300&h=350"}
          alt={image.description}
          onClick={this.openFullImage}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { openImageModal }
)(Image);
