import { useContext, useEffect, useState } from "react"
import { CVInformation } from "./data/InformationCont"
import { skillsPreset } from "./data/skillsPreset"

function SkillSelect({ skill, index }) {
  const { setSkills, skills } = useContext(CVInformation)
  const [pickedSkill, setPickedSkill] = useState(``)

  useEffect(
    _ => {
      skills.map(skillInArr => (skillInArr.id === skill.id ? setPickedSkill(`picked-skill`) : null ))
    },
    [skills]
  )

  const addSkill = _ => {
    setSkills(prev => [...prev, { text: skill.text, id: skill.id }])
  }

  return (
    <div onClick={addSkill} className={`skill-select ${pickedSkill}`}>
      {skill.text} +
    </div>
  )
}

export default SkillSelect
