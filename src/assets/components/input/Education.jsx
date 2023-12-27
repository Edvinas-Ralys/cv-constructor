import Chevron from "../../icons/Chevron";
import Plus from "../../icons/Plus";
import { useEffect, useState } from "react";
import EducationList from "./EducationList";
import EducationItem from "./EducationItem";
import { v4 as uuidv4 } from "uuid";
import EduInfo from "./EduInfoStaging";


function Education() {
  const [open, setOpen] = useState(false);
  const openDropdown = () => {
    setOpen(!open);
  };


  const [eduItem, setEduItem] = useState([]);
  const addEducation = () => {
    setEduItem((prev) => [...prev, <EducationItem />]);
    console.log(`add clicked`);
  };

  return (
    <div className={`education ${open ? "active" : "inactive"}`}>
      <div className="education-title" onClick={openDropdown}>
        <h3>Education</h3>
        <Chevron />
      </div>
      <EducationList eduItem={eduItem} addEducation={addEducation} setEduItem={setEduItem} />

      {eduItem.length !== 3 ? (
        <div onClick={addEducation} className="add-education">
          <p>Add</p>
          <Plus />
        </div>
      ) : null}

      <button onClick={openDropdown}>Save</button>
    </div>
  );
}

export default Education;
