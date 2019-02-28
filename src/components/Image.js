import React from "react";

export default function Image({ image }) {
  return (
    <div className="image-flex-container">
      <img
        className="single-photo"
        src={image.urls.thumb}
        alt={image.description}
      />
    </div>
  );
}
