import React, { useContext } from "react"
import { CVInformation } from "./data/InformationCont"
import EducationItem from "./EducationItem"
import { v4 as uuidv4 } from "uuid"

function EducationList() {
  const { education, setEducation } = useContext(CVInformation)

  const handleEdu = _ => {
    setEducation(prev => [
      ...prev,
      {
        school: ``,
        degree: ``,
        starDate: ``,
        endDate: ``,
        city: ``,
        description: ``,
        id: uuidv4(),
      },
    ])
  }

  return (
    <div className="education-input">
      <div className="title">
        Education
        <p className="description">
          A varied education on your resume sums up the value that your learnings and background
          wils bring to the job
        </p>
      </div>
      <div className="input">
        <div className="education-list">
          {education.map((item, i) => (
            <EducationItem key={i} item={item} />
          ))}
        </div>

        <p onClick={handleEdu} className="aditional-click">
          {education.length === 0 ? `+ Add education` : `+ Add one more education`}
        </p>
      </div>
    </div>
  )
}

export default EducationList
