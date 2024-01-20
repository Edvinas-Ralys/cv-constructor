import { DeleteIcon } from "../svgs/Icons"
import { useContext, useState } from "react"
import { CVInformation } from "../data/InformationCont"

function EducationItem({ item }) {
  const [editCard, setEditCard] = useState(false)
  const { setEducation, education } = useContext(CVInformation)

  const destroyEdu = _ => {
    setEducation(edus => edus.filter(edu => edu.id !== item.id))
  }


  const handleEduClear = _ =>{

  }

  const handleEduFill =_ =>{

  }

  return (
    <>
      <div className="edu-card">
        <div className="cont">
          <div onClick={_ => setEditCard(!editCard)} className="cont-title">
            <p>{item.school === `` ? `Not specified` : item.school}</p>
            <p className="date">
              {item.startDate === `` ? `` : item.startDate}
              {item.endDate === `` ? `` : ` - ${item.endDate}`}
            </p>
          </div>
          <div className="buttons">
            <button onClick={handleEduClear} className="clear">
              Clear
            </button>
            <button onClick={handleEduFill}>Auto-fill</button>
          </div>

          <div onClick={destroyEdu} className="delete">
            {DeleteIcon}
          </div>
        </div>
        {editCard && (
          <div className="edu-edit">
            <div className="section">
              <div className="school input">
                <label htmlFor="title">School</label>
                <input
                  type="text"
                  value={item.school}
                  onChange={e =>
                    setEducation(edus =>
                      edus.map(edu =>
                        edu.id === item.id ? { ...edu, school: e.target.value } : edu
                      )
                    )
                  }
                  id="title"
                />
              </div>
              <div className="degree input">
                <label htmlFor="employer">Degree</label>
                <input
                  type="text"
                  id="emplyer"
                  value={item.degree}
                  onChange={e =>
                    setEducation(edus =>
                      edus.map(edu =>
                        edu.id === item.id ? { ...edu, degree: e.target.value } : edu
                      )
                    )
                  }
                />
              </div>
            </div>
            <div className="section">
              <div className="dates-split input">
                <label htmlFor="dates">Start & End Date</label>
                <div className="date-inputs">
                  <input
                    type="date"
                    value={item.startDate}
                    onChange={e =>
                      setEducation(edus =>
                        edus.map(edu =>
                          edu.id === item.id ? { ...edu, startDate: e.target.value } : edu
                        )
                      )
                    }
                  />
                  <input
                    type="date"
                    value={item.endDate}
                    onChange={e =>
                      setEducation(edus =>
                        edus.map(edu =>
                          edu.id === item.id ? { ...edu, endDate: e.target.value } : edu
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="city input">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="city"
                  value={item.city}
                  onChange={e =>
                    setEducation(edus =>
                      edus.map(edu => (edu.id === item.id ? { ...edu, city: e.target.value } : edu))
                    )
                  }
                />
              </div>
            </div>
            <div className="content">
              <label htmlFor="desct">Description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="50"
                value={item.description}
                onChange={e =>
                  setEducation(edus =>
                    edus.map(edu =>
                      edu.id === item.id ? { ...edu, description: e.target.value } : edu
                    )
                  )
                }
              ></textarea>
            </div>
            <div className="buttons">
              <button onClick={_ => setEditCard(!editCard)}>Save</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default EducationItem
