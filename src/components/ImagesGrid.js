import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Image";
export class ImagesGrid extends Component {
  componentWillUpdate() {
    console.log(this.props.image.images.results);
  }
  render() {
    if (this.props.image.images.results) {
      const images = this.props.image.images.results;
      return (
        <div className="images-grid">
          {images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </div>
      );
    } else {
      return <h1>Empty List</h1>;
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
