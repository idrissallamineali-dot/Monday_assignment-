import React from "react";

export default function LibraryButton({ buttonLabel, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{buttonLabel}</button>
    </div>
  );
}
