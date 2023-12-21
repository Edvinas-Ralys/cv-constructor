import React from "react";
import { useState } from "react";

function AddEducation(removeEducation) {


  return (
    <>
      <div className="info-section">
        <p>School:</p>
        <input type="text" />
      </div>
      <div className="info-section">
        <p>Degree:</p>
        <input type="text" />
      </div>
      <div className="info-section">
        <p>Field of study:</p>
        <input type="text" />
      </div>
      <div className="info-section">
        <p>Start date:</p>
        <input type="date" />
      </div>
      <div className="info-section">
        <p>End date:</p>
        <input type="date" />
      </div>
      <button onClick={removeEducation} className="remove-button">Remove</button>
    </>
  );
}

export default AddEducation;
