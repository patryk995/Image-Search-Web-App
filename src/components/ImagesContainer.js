import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getImages } from "./../actions/imageActions";
import LoadingSpinner from "./LoadingSpinner";

import ImagesGrid from "./ImagesGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class ImagesContainer extends Component {
  render() {
    return (
      <div className="images-container">
        {this.props.image.loading ? (
          <LoadingSpinner />
        ) : this.props.image.isFirstLoad ? (
          <ImagesGrid />
        ) : (
          <div className="py-5 text-center opacity-half m-auto">
            <FontAwesomeIcon icon="images" size="3x" />
            <p>Empty Images List</p>
          </div>
        )}
      </div>
    );
  }
}

ImagesContainer.propTypes = {
  image: PropTypes.object.isRequired,
  getImages: PropTypes.func
};

const mapStateToProps = state => ({
  image: state.image
});
export default connect(
  mapStateToProps,
  { getImages }
)(ImagesContainer);
