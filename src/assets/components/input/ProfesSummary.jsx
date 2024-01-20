import React from "react"
import { CVInformation } from "../data/InformationCont"
import { useContext} from "react"
import { personalPreset } from "../data/userPreset"

function ProfesSummary() {
  const { personalInfo, setPersonalInfo } = useContext(CVInformation)

  const handleProfSumFill = _ =>{
    setPersonalInfo(prev => ({...prev, profSum:personalPreset.profSum}))
  }

  const handleProfSumClear = _ =>{
    setPersonalInfo(prev => ({...prev, profSum: ``}))
  }

  return (
    <div className="professional-summary info-section">
      <div className="title">
        <div className="top">
        Prefessional Summary
        <div className="buttons">
        <button className="clear" onClick={handleProfSumClear}>Clear</button>
          <button onClick={handleProfSumFill}>Auto-fill</button>

        </div>
        </div>


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
