import { useContext } from "react"
import SkillSelect from "./SkillSelect"
import { skillsPreset } from "./data/skillsPreset"
import { CVInformation } from "./data/InformationCont"
import { v4 as uuidv4 } from "uuid"

function SkillList() {
  const { skills } = useContext(CVInformation)

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
        {skills.map((skill, i) => (
          <div key={i} className="skill-item">
            {skill.text}
          </div>
        ))}
      </div>
      <p className="aditional-click">
        {skills.length === 0 ? `+ Add skill` : `+ Add one more skill`}
      </p>
    </div>
  )
}

export default SkillList
