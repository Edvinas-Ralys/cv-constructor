import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"

function Employment() {
  const { employment } = useContext(CVInformation)

  return (
    <>
      {employment.length !== 0 && (
        <div className="employment">
          <div className="title">Employment History</div>
          <div className="employments">
            {employment.map((item, i) => (
              <div key={i} className="section">
                <div className="job-intro">
                  <div className="job-title">
                    {item.jobTitle}
                    {item.employer !== `` ? ` at ${item.employer}` : null}
                    {item.city !== `` ? `, ${item.city}` : null}
                  </div>
                  <div className="job-date">
                    {item.startDate} {item.endDate !== `` ? `- ${item.endDate}` : null}
                  </div>
                </div>
                <div className="job-description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Employment
