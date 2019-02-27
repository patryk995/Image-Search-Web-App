import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoadingSpinner() {
  return (
    <div className="py-5 text-center">
      <FontAwesomeIcon icon="spinner" spin pulse size="2x" />
      <p>Loading...</p>
    </div>
  );
}
