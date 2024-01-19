import { useContext, useState } from "react"
import { CVInformation } from "../data/InformationCont"
import EmploymentItem from "./EmploymentItem"
import { v4 as uuidv4 } from "uuid"

function EmploymentList() {
  const { employment, setEmployment } = useContext(CVInformation)

  const handleEmpl = _ => {
    setEmployment(prev => [
      ...prev,
      {
        jobTitle: ``,
        employer: ``,
        startDate: ``,
        endDate: ``,
        city: ``,
        description: ``,
        id: uuidv4(),
      },
    ])
  }

  return (
    <div className="employment-input">
      <div className="title">
        Employment History
        <p className="description">
          Show your relevant experience - last 10 years. Use bullet points to note your achievments,
          if possible - use numbers/facts
        </p>
      </div>
      <div className="input">
        <div className="employment-list">
          {employment.map((item, i) => (
            <EmploymentItem key={i} item={item} />
          ))}
        </div>

        <p onClick={handleEmpl} className="aditional-click">
          {employment.length === 0 ? `+ Add employment` : `+ Add one more employment`}
        </p>
      </div>
    </div>
  )
}

export default EmploymentList
