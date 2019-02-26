import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Image";
export class ImagesGrid extends Component {
  componentWillUpdate() {
    console.log(this.props.image.images.results);
  }
  render() {
    if (this.props.image.loading) {
      return <h3 className="text-center">Loading...</h3>;
    }
    if (this.props.image.images.results) {
      const images = this.props.image.images.results;
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
    } else {
      return <p>Empty List</p>;
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
