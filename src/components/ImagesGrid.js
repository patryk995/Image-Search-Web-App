import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Image";
import LoadingSpinner from "./LoadingSpinner";
export class ImagesGrid extends Component {
  componentWillUpdate() {
    console.log(this.props.image.images.results);
  }
  render() {
    if (this.props.image.loading) {
      return <LoadingSpinner />;
    }

    if (this.props.image.images.results) {
      const images = this.props.image.images.results;
      if (this.props.image.images.total === 0) {
        return <p>No images Found.</p>;
      } else {
        return (
          <div className="images-grid-container">
            <div className="images-top-line">
              <p>{this.props.image.images.total} images found.</p>
            </div>
            <div className="images-grid">
              {images.map(image => (
                <Image key={image.id} image={image} />
              ))}
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <i class="far fa-images" /> <br />
          <p>Empty List</p>
        </div>
      );
    }
  }
}
ImagesGrid.propTypes = {
  image: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  image: state.image
});
export default connect(mapStateToProps)(ImagesGrid);
