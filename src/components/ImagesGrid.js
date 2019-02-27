import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Image";
import LoadingSpinner from "./LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ImagesGrid extends Component {
  render() {
    if (this.props.image.loading) {
      return <LoadingSpinner />;
    }

    if (this.props.image.images.results) {
      const images = this.props.image.images.results;
      if (this.props.image.images.total === 0) {
        return (
          <div className="py-5 text-center opacity-half m-auto">
            <FontAwesomeIcon icon="sad-cry" size="3x" />
            <p>
              No images found.
              <br />
              Try again!
            </p>
          </div>
        );
      } else {
        return (
          <div className="images-grid-container">
            <div className="images-top-line">
              <p>
                On keyword <b>{this.props.image.keyword}</b>{" "}
                {this.props.image.images.total} images found.
              </p>
            </div>
            <div className="images-grid">
              {images.map(image => (
                <Image key={image.id} image={image} />
              ))}
            </div>
          </div>
        );
      }
    }

    return (
      <div className="py-5 text-center opacity-half m-auto">
        <FontAwesomeIcon icon="images" size="3x" />
        <p>Empty Images List</p>
      </div>
    );
  }
}
ImagesGrid.propTypes = {
  image: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  image: state.image
});
export default connect(mapStateToProps)(ImagesGrid);
