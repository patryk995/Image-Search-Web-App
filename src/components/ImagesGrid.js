import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMoreImages } from "../actions/imageActions";

import Image from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "./LoadingSpinner";

export class ImagesGrid extends Component {
  state = {
    images: [],
    imagesTemp: []
  };
  componentDidMount() {}
  fetchImages = () => {
    const nextPage = this.props.image.page + 1;
    const keyword = this.props.image.keyword;
    this.props.getMoreImages(keyword, nextPage);
  };
  hasMore = () => {
    // If last page don't load more
    if (this.props.image.totalPages === this.props.image.page) {
      return false;
    }
    // If not last page load more
    return true;
  };
  render() {
    const images = this.props.image.imagesList;

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
    }

    return (
      <div className="images-grid-container">
        <div className="images-top-line">
          <p>
            On keyword <b>{this.props.image.keyword}</b>{" "}
            {this.props.image.images.total} images found.
          </p>
        </div>
        <InfiniteScroll
          dataLength={images.length}
          next={this.fetchImages}
          hasMore={this.hasMore()}
          style={{ overflowY: "hidden" }}
          loader={<LoadingSpinner />}
        >
          <div className="images-flex">
            {images.map(image => (
              <Image key={image.id} image={image} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
ImagesGrid.propTypes = {
  image: PropTypes.object.isRequired,
  getMoreImages: PropTypes.func
};

const mapStateToProps = state => ({
  image: state.image
});
export default connect(
  mapStateToProps,
  { getMoreImages }
)(ImagesGrid);
