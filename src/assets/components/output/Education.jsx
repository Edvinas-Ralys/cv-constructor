import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"

function Education() {
  const { education } = useContext(CVInformation)

  return (
    <>
      {education.length !== 0 && (
        <div className="education">
          <div className="title">Education</div>
          <div className="edus">
            {education.map((edu, i) => (
              <div key={i} className="section">
                <div className="edu-intro">
                  <div className="edu-title">
                    {edu.school}
                    {edu.city !== `` ? `, ${edu.city}` : null}
                    <div className="edu-date">
                      {edu.startDate} {edu.endDate !== `` ? ` - ${edu.endDate}` : null}
                    </div>
                    <div className="edu-degree">{edu.degree}</div>
                  </div>
                </div>
                <div className="edu-description">{edu.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Education
