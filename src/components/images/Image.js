import React from "react";

export default function Image({ image }) {
  return (
    <div className="image-flex-container">
      <img
        className="single-photo"
        src={image.urls.raw + "&w=300&h=350"}
        alt={image.description}
      />
    </div>
  );
}
