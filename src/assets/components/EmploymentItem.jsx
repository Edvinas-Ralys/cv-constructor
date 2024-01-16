import { useState } from "react"
import { DeleteIcon } from "./Icons"

function EmploymentItem({ item }) {
  const [editCard, setEditCard] = useState(false)
  const [info, setInfo] = useState(item)


  return (
    <>
      <div className="empl-card">
        <div onClick={_ => setEditCard(!editCard)} className="cont">
          <div className="cont-title">
            <p>{info.jobTitle === `` ? `Not specified` : info.jobTitle}</p>
            <p className="date">
              {info.startDate === `` ? `` : info.startDate}{" "}
              {info.startDate !== `` && info.endDate !== `` && `-`}{" "}
              {info.endDate === `` ? `` : info.endDate}
            </p>
          </div>
          <div onClick={_=>setDeleteEmpl(info)}  className="delete">{DeleteIcon}</div>
        </div>
        {editCard && (
          <div className="empl-edit">
            <div className="section">
              <div className="job input">
                <label htmlFor="title">Job title</label>
                <input
                  type="text"
                  value={info.jobTitle}
                  onChange={e => setInfo({ ...info, jobTitle: e.target.value })}
                  id="title"
                />
              </div>
              <div className="employer input">
                <label htmlFor="employer">Employer</label>
                <input
                  type="text"
                  id="emplyer"
                  value={info.employer}
                  onChange={e => setInfo({ ...info, employer: e.target.value })}
                />
              </div>
            </div>
            <div className="section">
              <div className="dates-split input">
                <label htmlFor="dates">Start & End Date</label>
                <div className="date-inputs">
                  <input
                    type="date"
                    value={info.startDate}
                    onChange={e => setInfo(prev => ({ ...prev, startDate: e.target.value }))}
                  />
                  <input
                    type="date"
                    value={info.endDate}
                    onChange={e => setInfo(prev => ({ ...prev, endDate: e.target.value }))}
                  />
                </div>
              </div>
              <div className="city input">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="city" />
              </div>
            </div>
            <div className="content">
              <label htmlFor="desct">Description</label>
              <textarea name="" id="" cols="30" rows="50"></textarea>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default EmploymentItem
