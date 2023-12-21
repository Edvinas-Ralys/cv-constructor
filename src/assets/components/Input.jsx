import { useState } from "react";
import BasicInfo from "./input/BasicInfo";
import Education from "./input/Education";


function Input({
  basicMultiText,
  handleMultiText,
}) {
  return (
    <div className="input-side">
      <BasicInfo
          basicMultiText={basicMultiText}
          handleMultiText={handleMultiText}
      />
      <Education />
    </div>
  );
}

export default Input;
