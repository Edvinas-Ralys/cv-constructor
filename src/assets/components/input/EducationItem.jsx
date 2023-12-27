import React, { useState } from "react";
import EduInfo from "./EduInfoStaging";

function EducationItem({text, eduItem, addEducation, setEduItem}) {

  const checkEdu = () => {
    EduInfo.push(eduMultiText)
    console.log(EduInfo)
  }

  const [eduMultiText, setEduMultitext] = useState({school:``, degree:``, field:``, start:``, end:``})
const handleEduText = (e, item) => {
  const newEduText = {...eduMultiText};
  newEduText[item] = e.target.value;
  setEduMultitext(newEduText)
}
  return (
    <>
      <div className="info-section">
        <p>School:</p>
        <input type="text" value={eduMultiText.school} onChange={e => handleEduText(e, `school`)} />
      </div>
      <div className="info-section">
        <p>Degree:</p>
        <input type="text" value={eduMultiText.degree} onChange={e => handleEduText(e, `degree`)} />
      </div>
      <div className="info-section">
        <p>Field of study:</p>
        <input type="text" value={eduMultiText.field} onChange={e => handleEduText(e, `field`)}/>
      </div>
      <div className="info-section">
        <p>Start date:</p>
        <input type="date" value={eduMultiText.start} onChange={e => handleEduText(e, `start`)}/>
      </div>
      <div className="info-section">
        <p>End date:</p>
        <input type="date" value={eduMultiText.end} onChange={e => handleEduText(e, `end`)}/>
      </div>
      <button onClick={checkEdu} className="remove-button">
        {text}
      </button>
    </>
  );
}

export default EducationItem;
