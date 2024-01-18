import { useContext } from "react"
import SkillSelect from "./SkillSelect"
import { skillsPreset } from "./data/skillsPreset"
import { CVInformation } from "./data/InformationCont"
import { v4 as uuidv4 } from "uuid"
import SkillItem from "./SkillItem"

function SkillList() {
  const { skills, setSkills } = useContext(CVInformation)

  const addCustomSkill = _ => {
    setSkills(prev => [...prev, { text: ``, id: uuidv4() }])
  }

  return (
    <div className="skills-input">
      <div className="title">
        Skills
        <p className="description">
          Choose 5 important skills that show you fit the position. Make sure they match the key
          skills mentioned in the job listing, especially when applying via an online system.
        </p>
      </div>

      <div className="skill-pool">
        {skillsPreset.map((skill, i) => (
          <SkillSelect key={i} skill={skill} index={i} />
        ))}
      </div>
      <div className="skill-list">
        {skills.map((skillItem, i) => (
          <SkillItem key={i} skillItem={skillItem} />
        ))}
      </div>
      <p onClick={addCustomSkill} className="aditional-click">
        {skills.length === 0 ? `+ Add skill` : `+ Add one more skill`}
      </p>
    </div>
  )
}

export default SkillList
