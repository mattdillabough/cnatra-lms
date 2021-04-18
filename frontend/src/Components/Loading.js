import React from "react";

function Loading() {
  return (
    <div className="container loading mb-3 py-3 flex-fill">
      <div className="spinner-border" role="status">
        <span className="sr-only visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
