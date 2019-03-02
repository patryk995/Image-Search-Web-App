import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getImages } from "../../actions/imageActions";
import LoadingSpinner from "../LoadingSpinner";
import ImageModal from "./ImageModal";
import ImagesGrid from "./ImagesGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class ImagesContainer extends Component {
  render() {
    return (
      <div className="images-container">
        <h2 className="text-center title">Images</h2>
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
        {this.props.image.isModalVisible && <ImageModal />}
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
