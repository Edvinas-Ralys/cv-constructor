import SkillSelect from "./SkillSelect"
import { skills } from "./data/skills"

function SkillList() {
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
        {skills.map(skill => (
          <SkillSelect skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillList
