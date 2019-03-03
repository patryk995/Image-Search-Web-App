import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMoreImages } from "./../../actions/imageActions";
import Image from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../LoadingSpinner";
export function ImagesGrid(props) {
  const images = props.image.imagesList;

  if (props.image.totalImages === 0) {
    return (
      <div className="py-5 text-center opacity-half m-auto red">
        <FontAwesomeIcon icon="sad-cry" size="3x" />
        <p>
          On keyword <b>{props.image.keyword}</b> No images found.
          <br />
          Try another keyword!
        </p>
      </div>
    );
  }

  return (
    <div className="images-container py-5">
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          const nextPage = props.image.page + 1;
          const keyword = props.image.keyword;
          props.getMoreImages(keyword, nextPage);
        }}
        hasMore={props.image.totalPages === props.image.page ? false : true}
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
