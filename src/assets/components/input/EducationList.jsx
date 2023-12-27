import { useEffect, useState } from "react";
import EducationItem from "./EducationItem";
import { v4 as uuidv4 } from "uuid";

function EducationList({ text, eduItem, addEducation }) {
  return (
    <div>
      {eduItem.map((item) => (
        <EducationItem
          key={uuidv4()}
          text={`HELLO`}
          eduItem={eduItem}
          addEducation={addEducation}
        />
      ))}
    </div>
  );
}

export default EducationList;
