import React, { useContext } from "react"
import { CVInformation } from "../data/InformationCont"

function Header() {
  const { personalInfo } = useContext(CVInformation)

  return (
    <div className="header">
      <div className="basic-info">
        <p className="name-surname">
          {personalInfo.name} {personalInfo.surname}
        </p>
        <p className="job-title"> {personalInfo.jobTitle}</p>
      </div>
    </div>
  )
}

export default Header
