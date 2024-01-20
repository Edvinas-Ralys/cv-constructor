import { DeleteIcon } from "../svgs/Icons"
import { useContext, useEffect, useState } from "react"
import { CVInformation } from "../data/InformationCont"
import { employmentPreset } from "../data/userPreset"
import { v4 as uuidv4 } from "uuid"

function EmploymentItem({ item }) {
  const [editCard, setEditCard] = useState(false)
  const { employment, setEmployment } = useContext(CVInformation)
  const [autoFillCount, setAutoFillCount] = useState(false)

  useEffect(
    _ => {
      employment.filter(
        emplItem => emplItem.id === employmentPreset[0].id || emplItem.id === employmentPreset[1].id
      ).length === 2
        ? setAutoFillCount(true)
        : setAutoFillCount(false)
    },
    [employment]
  )

  const destroyEmpl = _ => {
    setEmployment(jobs => jobs.filter(job => job.id !== item.id))
  }

  const handleEmplFill = _ => {
    if (employment.filter(item => item.id === employmentPreset[0].id).length === 0) {
      setEmployment(prev =>
        prev.map(emplInArr =>
          emplInArr.id === item.id
            ? {
                ...item,
                jobTitle: employmentPreset[0].jobTitle,
                employer: employmentPreset[0].employer,
                startDate: employmentPreset[0].startDate,
                endDate: employmentPreset[0].endDate,
                city: employmentPreset[0].city,
                description: employmentPreset[0].description,
                id: employmentPreset[0].id,
              }
            : emplInArr
        )
      )
    } else if (employment.filter(item => item.id === employmentPreset[1].id).length === 0) {
      setEmployment(prev =>
        prev.map(emplInArr =>
          emplInArr.id === item.id
            ? {
                ...item,
                jobTitle: employmentPreset[1].jobTitle,
                employer: employmentPreset[1].employer,
                startDate: employmentPreset[1].startDate,
                endDate: employmentPreset[1].endDate,
                city: employmentPreset[1].city,
                description: employmentPreset[1].description,
                id: employmentPreset[1].id,
              }
            : emplInArr
        )
      )
    }
  }

  const handleEmplClear = _ => {
    setEmployment(prev =>
      prev.map(emplInArr =>
        emplInArr.id === item.id
          ? {
              ...item,
              jobTitle: ``,
              employer: ``,
              startDate: ``,
              endDate: ``,
              city: ``,
              description: ``,
              id: uuidv4(),
            }
          : emplInArr
      )
    )
  }

  return (
    <>
      <div className="empl-card">
        <div className="cont">
          <div onClick={_ => setEditCard(!editCard)} className="cont-title">
            <p>{item.jobTitle === `` ? `Not specified` : item.jobTitle}</p>
            <p className="date">
              {item.startDate === `` ? `` : item.startDate}
              {item.endDate === `` ? `` : ` - ${item.endDate}`}
            </p>
          </div>
          <div className="buttons">
            <button onClick={handleEmplClear} className="clear">
              Clear
            </button>
            <button className={`${autoFillCount && `disabled`}`} onClick={handleEmplFill}>
              Auto-fill
            </button>
          </div>
          <div onClick={destroyEmpl} className="delete">
            {DeleteIcon}
          </div>
        </div>
        {editCard && (
          <div className="empl-edit">
            <div className="section">
              <div className="job input">
                <label htmlFor="title">Job title</label>
                <input
                  type="text"
                  value={item.jobTitle}
                  onChange={e =>
                    setEmployment(jobs =>
                      jobs.map(job =>
                        job.id === item.id ? { ...job, jobTitle: e.target.value } : job
                      )
                    )
                  }
                  id="title"
                />
              </div>
              <div className="employer input">
                <label htmlFor="employer">Employer</label>
                <input
                  type="text"
                  id="emplyer"
                  value={item.employer}
                  onChange={e =>
                    setEmployment(jobs =>
                      jobs.map(job =>
                        job.id === item.id ? { ...job, employer: e.target.value } : job
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
                      setEmployment(jobs =>
                        jobs.map(job =>
                          job.id === item.id ? { ...job, startDate: e.target.value } : job
                        )
                      )
                    }
                  />
                  <input
                    type="date"
                    value={item.endDate}
                    onChange={e =>
                      setEmployment(jobs =>
                        jobs.map(job =>
                          job.id === item.id ? { ...job, endDate: e.target.value } : job
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
                    setEmployment(jobs =>
                      jobs.map(job => (job.id === item.id ? { ...job, city: e.target.value } : job))
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
                  setEmployment(jobs =>
                    jobs.map(job =>
                      job.id === item.id ? { ...job, description: e.target.value } : job
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

export default EmploymentItem
