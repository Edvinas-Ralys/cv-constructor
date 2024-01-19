import { DeleteIcon } from "../svgs/Icons"
import { useContext, useState } from "react"
import { CVInformation } from "../data/InformationCont"

function EmploymentItem({ item }) {
  const [editCard, setEditCard] = useState(false)
  const { setEmployment } = useContext(CVInformation)

  const destroyEmpl =_ =>{
    setEmployment(jobs => jobs.filter(job => job.id !== item.id))
  }

  return (
    <>
      <div className="empl-card">
        <div  className="cont">
          <div onClick={_ => setEditCard(!editCard)}className="cont-title">
            <p>{item.jobTitle === `` ? `Not specified` : item.jobTitle}</p>
            <p className="date">
              {item.startDate === `` ? `` : item.startDate}
              {item.endDate === `` ? `` : ` - ${item.endDate}`}
            </p>
          </div>
          <div onClick={destroyEmpl} className="delete">{DeleteIcon}</div>
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
