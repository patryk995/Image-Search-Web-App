import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getImages } from "../../actions/imageActions";
import LoadingSpinner from "../LoadingSpinner";
import ImageModal from "./ImageModal";
import ImagesGrid from "./ImagesGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function ImagesContainer(props) {
  return (
    <div className="images-container">
      <div className="title images-title">
        <h2>Images</h2>
        {props.image.isFirstLoad && (
          <p className="images-count">
            On keyword <b>{props.image.keyword}</b> {props.image.totalImages}{" "}
            images found.
          </p>
        )}
      </div>
      {props.image.loading ? (
        <LoadingSpinner />
      ) : props.image.isFirstLoad ? (
        <ImagesGrid />
      ) : (
        <div className="py-5 text-center opacity-half m-auto">
          <FontAwesomeIcon icon="images" size="3x" />
          <p>Empty Images List</p>
        </div>
      )}
      {props.image.isModalVisible && <ImageModal />}
    </div>
  );
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
