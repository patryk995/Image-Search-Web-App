import React, { Component } from "react";

export class CustomGrid extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="custom-grid-container">
        <div className="grid-col" />
        <div className="grid-col" />
      </div>
    );
  }
}

export default CustomGrid;
