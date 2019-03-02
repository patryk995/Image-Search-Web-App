import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeImageModal, nextModalImage } from "../../actions/imageActions";

export class ImageModal extends Component {
  closeModal = () => {
    this.props.closeImageModal();
  };
  nextImage = indexChange => {
    const newIndex = this.props.image.modalCurrentImgIndex + indexChange;
    this.props.nextModalImage(newIndex);
  };
  render() {
    const imageIndex = this.props.image.modalCurrentImgIndex;
    const image = this.props.image.imagesList[
      this.props.image.modalCurrentImgIndex
    ];
    const lastImageIndex = this.props.image.imagesList.length - 1;

    return (
      <div className="modal-fixed-container">
        {imageIndex !== 0 && (
          <div className="left-arrow modal-arrow">
            <button className="prev-img" onClick={() => this.nextImage(-1)}>
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
            <button className="next-img" onClick={() => this.nextImage(1)}>
              <FontAwesomeIcon icon="angle-right" size="5x" />
            </button>
          </div>
        )}

        <button className="close-modal" onClick={this.closeModal}>
          <FontAwesomeIcon icon="times" size="3x" />
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  image: state.image
});

export default connect(
  mapStateToProps,
  { closeImageModal, nextModalImage }
)(ImageModal);
