import { useState } from "react";
import BasicInfo from "./input/BasicInfo";

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
    </div>
  );
}

export default Input;
