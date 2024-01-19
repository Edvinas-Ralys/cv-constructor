import { useContext, useState } from "react"
import { DeleteIcon } from "../svgs/Icons"
import { CVInformation } from "../data/InformationCont"


function SkillItem({ skillItem }) {
  const [editCard, setEditCard] = useState(false)
  const { setSkills } = useContext(CVInformation)

  const deleteSkill = _ => {
    setSkills(skillsAll => skillsAll.filter(skillInArr => skillInArr.id !== skillItem.id))
  }

  return (
    <div className="skill-card">
      <div className="cont">
        <div onClick={_ => setEditCard(!editCard)} className="cont-title">
          {skillItem.text !== `` ? skillItem.text : `Not specified`}
        </div>
        <div onClick={deleteSkill} className="delete">
          {DeleteIcon}
        </div>
      </div>
      {editCard && (
        <div className="skill-edit">
          <div className="section">
            <div className="skill input">
              <label htmlFor="skill">Skill</label>
              <input
                type="text"
                value={skillItem.text}
                onChange={e =>
                  setSkills(skillsInArr =>
                    skillsInArr.map(skillInArr =>
                      skillInArr.id === skillItem.id
                        ? { ...skillInArr, text: e.target.value }
                        : skillInArr
                    )
                  )
                }
              />
            </div>
          </div>
          <div className="buttons">
            <button onClick={_ => setEditCard(!editCard)}>Save</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillItem
