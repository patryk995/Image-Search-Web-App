import React from "react";

export default function Image({ image }) {
  return (
    <div className="image-flex-container">
      <img
        className="single-photo"
        src={image.urls.raw + "&w=196&h=225"}
        alt={image.description}
      />
    </div>
  );
}
