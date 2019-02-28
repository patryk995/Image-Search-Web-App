import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getImages } from "./../actions/imageActions";
import LoadingSpinner from "./LoadingSpinner";

import ImagesGrid from "./ImagesGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class ImagesContainer extends Component {
  render() {
    if (this.props.image.loading) {
      return <LoadingSpinner />;
    }
    if (this.props.image.isFirstLoad) {
      return <ImagesGrid />;
    }

    return (
      <div className="py-5 text-center opacity-half m-auto">
        <FontAwesomeIcon icon="images" size="3x" />
        <p>Empty Images List</p>
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
