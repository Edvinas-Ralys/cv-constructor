import { useContext } from "react"
import { CVInformation } from "./data/InformationCont"

function SkillSelect({ skill, index }) {
  const { setSkills, skills } = useContext(CVInformation)

  const addSkill = _ => {
    let duplicate = false
    skills.map(skillInArr => skillInArr.id === skill.id && (duplicate = true))
    !duplicate && setSkills([...skills, { text: skill.text, id: skill.id }])
  }

  return (
    <div onClick={addSkill} className={`skill-select`}>
      {skill.text} +
    </div>
  )
}

export default SkillSelect
