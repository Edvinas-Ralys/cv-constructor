import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"

function Skills() {
  const { skills } = useContext(CVInformation)

  return (
    <>
      {skills.length !== 0 && (
        <div className="skills">
          <div className="title">Skills</div>
          {skills.map((item, i) => (
            <div key={i} className="skill">
              {item.text}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Skills
