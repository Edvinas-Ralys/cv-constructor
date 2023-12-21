import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function EducationItem() {

  return (
    <>
      <div key={uuidv4} className="info-section">
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
      <button className="remove-button">Remove</button>
    </>
  );
}

export default EducationItem;
