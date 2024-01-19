import React from "react"
import { CVInformation } from "../data/InformationCont"
import { useContext, useState } from "react"

function ProfesSummary() {
  const { personalInfo, setPersonalInfo } = useContext(CVInformation)

  return (
    <div className="professional-summary info-section">
      <div className="title">
        Prefessional Summary
        <p className="description">
          Write 2-4 short & energetic sentences to interest the reader! Mention your role,
          experience & most importantly - your biggest achievements, best qualities and skills.
        </p>
      </div>
      <div className="content">
        <textarea
          name=""
          id=""
          cols="30"
          rows="50"
          value={personalInfo.profSum}
          onChange={e => setPersonalInfo(prev => ({ ...prev, profSum: e.target.value }))}
        ></textarea>
      </div>
    </div>
  )
}

export default ProfesSummary
