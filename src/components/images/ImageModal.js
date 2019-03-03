import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeImageModal, nextModalImage } from "../../actions/imageActions";

export function ImageModal(props) {
  const imageIndex = props.image.modalCurrentImgIndex;
  const image = props.image.imagesList[props.image.modalCurrentImgIndex];
  const lastImageIndex = props.image.imagesList.length - 1;

  return (
    <div className="modal-fixed-container">
      {imageIndex !== 0 && (
        <div className="left-arrow modal-arrow">
          <button
            className="prev-img"
            onClick={() => {
              props.nextModalImage(props.image.modalCurrentImgIndex - 1);
            }}
          >
            <FontAwesomeIcon icon="angle-left" size="5x" />
          </button>
        </div>
      )}
      <div className="modal-inner-container">
        {image.description !== null && (
          <div className="modal-description-container">
            <div className="modal-description-inner-container">
              {image.description}
            </div>
          </div>
        )}
        <img className="modal-image" src={image.urls.regular} alt="" />
      </div>
      {imageIndex !== lastImageIndex && (
        <div className="right-arrow modal-arrow">
          <button
            className="next-img"
            onClick={() => {
              props.nextModalImage(props.image.modalCurrentImgIndex + 1);
            }}
          >
            <FontAwesomeIcon icon="angle-right" size="5x" />
          </button>
        </div>
      )}

      <button
        className="close-modal"
        onClick={() => {
          props.closeImageModal();
        }}
      >
        <FontAwesomeIcon icon="times" size="3x" />
      </button>
    </div>
  );
}
const mapStateToProps = state => ({
  image: state.image
});

export default connect(
  mapStateToProps,
  { closeImageModal, nextModalImage }
)(ImageModal);
